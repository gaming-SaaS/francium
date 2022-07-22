import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsResolver } from './groups.resolver';
import { GroupProviders } from './groups.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GroupsResolver, GroupsService, ...GroupProviders]
})
export class GroupsModule { }
