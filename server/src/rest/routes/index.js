import express from 'express';
import baseRouter from './baseRouter.js';
const router = express.Router();

router.use('/', baseRouter);

export default baseRouter;
