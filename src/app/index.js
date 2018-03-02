import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from '../config';

const app = express();

app.set('views', config.templatesDir);
app.set('view engine', 'pug');

app.use(morgan(config.env === 'production' ? 'short' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(config.routes);

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
