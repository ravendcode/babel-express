export default (req, res, next) => {
  res.throw = (statusCodeOrMessage, message) => {
    const e = new Error();
    if (typeof statusCodeOrMessage === 'string') {
      e.message = statusCodeOrMessage;
    }
    if (typeof statusCodeOrMessage === 'number') {
      e.statusCode = statusCodeOrMessage;
    }
    if (message) {
      e.message = message;
    }
    throw e;
  };
  next();
};
