import express from 'express';

const router = express.Router({ mergeParams: true });

router.use('/user', require('./resources/user').default);

export default router;
