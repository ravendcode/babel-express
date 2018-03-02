import config from '../config';

export default (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }
  const statusCode = err.statusCode || 500;
  let errorName;
  switch (err.statusCode) {
    case 400:
      errorName = 'BadRequestError';
      break;
    case 401:
      errorName = 'UnauthorizedError';
      break;
    case 403:
      errorName = 'ForbiddenError';
      break;
    case 404:
      errorName = 'NotFoundError';
      break;
    case 500:
      errorName = 'InternalServerError';
      break;
    default:
      errorName = 'InternalServerError';
      break;
  }
  const result = {
    statusCode,
    error: errorName,
  };
  if (err.message) {
    result.message = err.message;
  }
  if (result.statusCode === 500 && config.env === 'development') {
    result.stack = err.stack;
  }
  res.status(result.statusCode);
  res.send({ ...result });
};
