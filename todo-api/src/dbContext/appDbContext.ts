import { DataSource } from 'typeorm';
import { Task } from './Models/task';

class DbContext {
  public readonly AppDataSource: DataSource;

  constructor() {
    this.AppDataSource = new DataSource({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: process.env.MARIADB_USER,
      password: process.env.MARIADB_PWD,
      database: process.env.MARIADB_DB,
      synchronize: true,
      entities: [Task],
    });
  }
}

export const AppDataSource = new DbContext().AppDataSource;
