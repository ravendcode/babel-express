export default {
  findByParam(req, res, next, id) {
    if (!id) {
      return next(new Error('Not Found Error'));
    }
    req.id = id;
    return next();
  },
  getAll(req, res) {
    res.send({ data: 'getAll' });
  },
  createOne(req, res) {
    res.send({ data: 'createOne', body: req.body });
  },
  getOne(req, res) {
    res.send({ data: 'getOne', param: req.id });
  },
  updateOne(req, res) {
    res.send({ data: 'updateOne', param: req.id, body: req.body });
  },
  deleteOne(req, res) {
    res.send({ data: 'deleteOne', param: req.id });
  },
};
