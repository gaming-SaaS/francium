
import { DataSource } from 'typeorm';
import { Group } from './entities/group.entity';
import { REPOSITORY, DATA_SOURCE } from '../constants';

export const GroupProviders = [
    {
        provide: REPOSITORY.GROUP,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Group),
        inject: [DATA_SOURCE],
    },
];