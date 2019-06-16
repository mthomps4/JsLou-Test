import { merge } from 'lodash';
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isDev: env === 'dev' || 'development',
  isTest: env === 'test' || 'testing',
  port: 4000
};

let envConfig = {};

switch (env) {
  case 'prod':
  case 'production':
    envConfig = require('./prod').config;
    break;
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;
  case 'test':
  case 'testing':
    envConfig = require('./test').config;
    break;
  default:
    envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
