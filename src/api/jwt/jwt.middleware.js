import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    req.user = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    next();
  } catch (err) {
    err.message = 'Invalid user';
    err.statusCode = 401;
    next(err);
  }
};
