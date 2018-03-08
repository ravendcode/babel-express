import express from 'express';

const router = express.Router({ mergeParams: true });

router.use('/', require('../render/page').default);
router.use('/api/user', require('../api/user').default);
router.use('/api/jwt', require('../api/jwt').default);

export default router;
