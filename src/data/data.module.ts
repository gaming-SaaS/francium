import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataResolver } from './data.resolver';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [DataResolver, DataService]
})
export class DataModule { }
