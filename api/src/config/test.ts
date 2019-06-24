export const config = {
  // dbUrl: '' -- Handled in ormconfig
  TYPEORM_TYPE: process.env.DB_TYPE,
  TYPEORM_HOST: process.env.DB_HOST,
  TYPEORM_PORT: process.env.DB_PORT,
  TYPEORM_USERNAME: process.env.DB_USERNAME,
  TYPEORM_PASSWORD: process.env.DB_PASSWORD,
  TYPEORM_DATABASE: process.env.DB_DATABASE
};
