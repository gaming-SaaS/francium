import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DataModule } from './data/data.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { GroupsModule } from './groups/groups.module';
import { GroupMembersModule } from './group-members/group-members.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.gql',
    }),
    DatabaseModule,
    DataModule,
    UsersModule,
    GroupsModule,
    GroupMembersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
