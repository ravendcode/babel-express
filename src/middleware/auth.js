import jwt from 'jsonwebtoken';
import db from '../../storage/memory/dev.json';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    const user = db.users.find(userDb => userDb.id === decode.id);
    if (!user) {
      res.throw(401, 'Invalid user');
    }
    req.user = user;
    next();
  } catch (err) {
    err.message = 'Invalid user';
    err.statusCode = 401;
    next(err);
  }
};
