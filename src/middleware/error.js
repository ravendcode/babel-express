import config from '../config';

export default (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }
  const statusCode = err.statusCode || 500;
  let errorName;
  let errorMessage;
  switch (err.statusCode) {
    case 400:
      errorName = 'BadRequestError';
      errorMessage = 'Bad Request';
      break;
    case 401:
      errorName = 'UnauthorizedError';
      errorMessage = 'Unauthorized';
      break;
    case 403:
      errorName = 'ForbiddenError';
      errorMessage = 'Forbidden';
      break;
    case 404:
      errorName = 'NotFoundError';
      errorMessage = 'Not Found';
      break;
    case 500:
      errorName = 'InternalServerError';
      errorMessage = 'Internal Server Error';
      break;
    default:
      errorName = 'InternalServerError';
      errorMessage = 'Internal Server Error';
      break;
  }
  const result = {
    statusCode,
    error: errorName,
  };
  if (err.message) {
    result.message = err.message;
  } else {
    result.message = errorMessage;
  }
  if (result.statusCode === 500 && config.env === 'development') {
    result.stack = err.stack;
  }
  res.status(result.statusCode);
  res.send({ ...result });
};
