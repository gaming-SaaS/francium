
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptors/logging';
import { PATH } from './constants';
import { mkdirSync } from 'fs';

export async function bootstrap(name: string, version: string) {
  PATH.LOG = './log/' + name;

  initialize();

  await createServers(version, AppModule);
}

async function createServers(version: string, appModule: any) {
  const app: INestApplication = await createNestApp(version, appModule);

  await createHTTPServer(app);
  await createGRPCServer(app);

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

async function createNestApp(version: string, appModule: any): Promise<INestApplication> {
  const app: INestApplication = await NestFactory.create(appModule);
  app.setGlobalPrefix(`api/v${version}`);
  app.useGlobalInterceptors(new LoggingInterceptor());
  return <INestApplication>app;
}

async function createHTTPServer(app: INestApplication) {
}

async function createGRPCServer(app: INestApplication) {
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'command',
      protoPath: ('./src/commands/command.proto'),
    }
  });
}

function initialize() {
  mkdirSync(PATH.LOG, { recursive: true })
}