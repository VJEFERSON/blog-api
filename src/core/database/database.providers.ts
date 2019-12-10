import { Sequelize } from 'sequelize-typescript';
import { PostEntity } from '../../blog/posts/post/post.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeInstance',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([PostEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
