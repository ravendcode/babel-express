export default {
  home(req, res) {
    res.render('page/index', { title: 'Home' });
  },
  about(req, res) {
    res.render('page/about', { title: 'About' });
  },
};
