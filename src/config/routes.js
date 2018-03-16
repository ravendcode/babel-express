import express from 'express';

const router = express.Router({ mergeParams: true });

router.use('/', require('../render/page').default);
router.use('/api/user', require('../resources/user').default);

export default router;
