import express from 'express';
import handler from './user.handler';

const router = express.Router();

router.param('id', handler.findByParam);

router.route('/')
  .get(handler.getAll)
  .post(handler.createOne);

router.route('/:id')
  .get(handler.getOne)
  .put(handler.updateOne)
  .delete(handler.deleteOne);

export default router;
