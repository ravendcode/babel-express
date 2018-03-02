export default (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }
  const result = {};
  result.message = err.message;
  result.statusCode = err.statusCode || 500;
  switch (result.statusCode) {
    case 400:
      result.error = 'Bad Request';
      break;
    case 401:
      result.error = 'Unauthorized';
      break;
    case 403:
      result.error = 'Forbidden';
      break;
    case 404:
      result.error = 'Not Found';
      break;
    case 500:
      result.error = 'Internal Server Error';
      break;
    default:
      result.error = 'Internal Server Error';
      break;
  }
  res.status(result.statusCode);
  res.send({
    statusCode: result.statusCode,
    error: result.error,
    message: result.message,
  });
};
