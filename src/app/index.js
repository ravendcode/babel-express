import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import boom from 'express-boom';
import config from '../config';
import pugMdw from '../middleware/pug';
import spaRenderMdw from '../middleware/spa';
import errorMdw from '../middleware/error';

const app = express();

app.set('views', config.templatesDir);
app.set('view engine', 'pug');

app.use(morgan(config.env === 'production' ? 'short' : 'dev'));
app.use(boom());
app.use(pugMdw);
app.locals.pretty = config.env === 'development';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(config.publicDir));
app.use('/static', express.static(config.staticDir));
app.use('/node_modules', express.static(config.nodeModulesDir));
app.use(config.routes);

// if true render pug page/index else send file public/index.html
app.all('*', spaRenderMdw(false));

app.use(errorMdw);

export default app;
