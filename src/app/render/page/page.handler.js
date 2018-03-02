export default {
  home(req, res) {
    res.render('page/index', { title: 'Home' });
  },
  hello(req, res) {
    res.send('Hello');
  },
};
