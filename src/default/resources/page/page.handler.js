export default {
  home(req, res) {
    res.render('index', { title: process.env.APP_NAME, message: 'Hello there!' });
  },
  hello(req, res) {
    res.send('Hello');
  },
};
