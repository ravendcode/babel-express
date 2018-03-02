import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';

const debug = require('debug')('app:config');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const port = env === 'production' ? 80 : 3000;
const templatesDir = path.join(__dirname, '../../resources/templates');

debug(`NODE_ENV is ${env}`);
debug(`APP_NAME is ${process.env.APP_NAME}`);

export default {
  env,
  port,
  templatesDir,
  routes,
};
