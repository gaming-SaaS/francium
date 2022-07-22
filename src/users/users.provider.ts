
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { REPOSITORY, DATA_SOURCE } from '../constants';

export const UserProviders = [
    {
        provide: REPOSITORY.USER,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [DATA_SOURCE],
    },
];