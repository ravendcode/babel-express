export default (app) => {
  app.use('/', require('../default').default);
  app.use('/api', require('../api').default);
};
