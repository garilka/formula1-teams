import express from 'express';
import apiRouter from './apiRouter.js';
import baseRouter from './baseRouter.js';
import userRouter from './userRouter.js';
import teamRouter from './teamRouter.js';
const router = express.Router();

router.use('/', baseRouter);
router.use('/api', apiRouter);
router.use('/api/user', userRouter);
router.use('/api/team', teamRouter);

export default router;
