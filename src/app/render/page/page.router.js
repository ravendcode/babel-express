import express from 'express';
import handler from './page.handler';

const router = express.Router();

router.get('/', handler.home);
router.get('/about', handler.about);

export default router;
