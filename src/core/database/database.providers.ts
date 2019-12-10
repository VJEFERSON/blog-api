import { Sequelize } from 'sequelize-typescript';
import { Post } from '../../blog/post/post.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeInstance',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
