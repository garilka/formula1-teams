import express from 'express';
import apiRouter from './apiRouter.js';
import baseRouter from './baseRouter.js';
import userRouter from './userRouter.js';
const router = express.Router();

router.use('/', baseRouter);
router.use('/api', apiRouter);
router.use('/api/user', userRouter);

export default router;
