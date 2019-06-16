import config from './src/config';

module.exports = {
  name: 'default',
  type: config.TYPEORM_TYPE,
  host: config.TYPEORM_HOST,
  port: config.TYPEORM_PORT,
  username: config.TYPEORM_USERNAME,
  password: config.TYPEORM_PASSWORD,
  database: config.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  migrationsTableName: 'typeorm_migrations',
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};
