
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../constants';
import { User } from '../users/entities/user.entity';

export const postgresProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '172.18.0.2',//process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [
          User
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
