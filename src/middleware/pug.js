import config from '../config';

export default (req, res, next) => {
  res.locals.app = {
    env: config.env,
    name: process.env.APP_NAME,
    locale: process.env.LOCALE,
  };
  next();
};
