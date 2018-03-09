import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';

const debug = require('debug')('app:config');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const port = env === 'production' ? 80 : 3000;
const resourcesDir = path.join(__dirname, '../../resources');
const templatesDir = path.join(resourcesDir, 'templates');
const staticDir = path.join(resourcesDir, 'static');
const publicDir = path.join(__dirname, '../../public');
const nodeModulesDir = path.join(__dirname, '../../node_modules');

debug(`NODE_ENV is ${env}`);
debug(`APP_NAME is ${process.env.APP_NAME}`);

export default {
  env,
  port,
  resourcesDir,
  templatesDir,
  staticDir,
  publicDir,
  nodeModulesDir,
  routes,
};
