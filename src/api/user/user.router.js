import express from 'express';
import handler from './user.handler';
import authMdw from '../../middleware/auth';

const router = express.Router();

router.get('/me', authMdw, handler.me);
router.post('/login', handler.login);

router.param('id', handler.findByParam);
router.route('/')
  .get(handler.getAll)
  .post(handler.createOne);

router.route('/:id')
  .get(handler.getOne)
  .patch(handler.updateOne)
  .delete(handler.deleteOne);

export default router;
