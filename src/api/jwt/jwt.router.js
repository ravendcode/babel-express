import express from 'express';
import handler from './jwt.handler';
import jwtMdw from './jwt.middleware';

const router = express.Router();

router.post('/register', handler.register);
router.post('/login', jwtMdw, handler.login);
router.delete('/logout', handler.logout);

export default router;
