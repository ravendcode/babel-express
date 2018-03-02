import express from 'express';

const router = express.Router({ mergeParams: true });

router.use('/api/user', require('../app/api/user').default);
router.use('/', require('../app/render/page').default);

export default router;
