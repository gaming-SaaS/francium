import { Module } from '@nestjs/common';
import { GroupMembersService } from './group-members.service';
import { GroupMembersResolver } from './group-members.resolver';
import { GroupMembersProviders } from './group-members.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GroupMembersResolver, GroupMembersService, ...GroupMembersProviders]
})
export class GroupMembersModule { }
