import express from 'express';

const router = express.Router({ mergeParams: true });

router.use('/', require('./resources/page').default);

export default router;
