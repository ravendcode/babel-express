import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';

const debug = require('debug')('app:config');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const port = env === 'production' ? 80 : 3000;
const templatesDir = path.join(__dirname, '../../resources/templates');
const staticDir = path.join(__dirname, '../../resources/static');
const publicDir = path.join(__dirname, '../../public');
const nodeModulesDir = path.join(__dirname, '../../node_modules');

debug(`NODE_ENV is ${env}`);
debug(`APP_NAME is ${process.env.APP_NAME}`);

export default {
  env,
  port,
  templatesDir,
  staticDir,
  publicDir,
  nodeModulesDir,
  routes,
};
