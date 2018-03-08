import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    req.user = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    await next();
  } catch (err) {
    res.throw(401, 'Uknown user');
  }
};
