import jwt from 'jsonwebtoken';
import user from '../../model/user';

export default {
  async register(req, res, next) {
    try {
      const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      res.status = 201;
      res.send({ token });
    } catch (e) {
      next(e);
    }
  },
  async login(req, res) {
    res.send({
      data: {
        user: req.user,
      },
    });
  },
  async logout(req, res) {
    res.send('logout');
  },
};
