import path from 'path';

export default (render = false) => (
  (req, res) => {
    if (render) {
      res.render('page/index', { title: 'Home' });
    } else {
      res.sendFile(path.join(__dirname, '../../public', 'index.html'));
    }
  }
);
