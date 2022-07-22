
import { DataSource } from 'typeorm';
import { GroupMember } from './entities/group-member.entity';
import { REPOSITORY, DATA_SOURCE } from '../constants';

export const GroupMembersProviders = [
    {
        provide: REPOSITORY.GROUP_MEMBER,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(GroupMember),
        inject: [DATA_SOURCE],
    },
];