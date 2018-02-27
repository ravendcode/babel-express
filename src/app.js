import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config';
// import routes from './config/routes';

const app = express();

app.set('views', config.templatesDir);
app.set('view engine', 'pug');

if (config.env === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

config.routes(app);

app.get('/error', () => {
  throw new Error('aa');
});

app.all('*', (req, res) => {
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  if (!err) {
    next();
    return;
  }
  res.status(400);
  res.send('Uh-oh: ' + err.message);
});

export default app;
