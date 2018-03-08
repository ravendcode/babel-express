import path from 'path';
import config from '../config';

export default (render = false) => (
  (req, res) => {
    if (render) {
      res.render('page/index', { title: 'Home' });
    } else {
      res.sendFile(path.join(config.publicDir, 'index.html'));
    }
  }
);
