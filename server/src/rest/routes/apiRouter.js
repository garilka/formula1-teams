import express from 'express';
import authController from '../controllers/authController.js';
const apiRouter = express.Router();

apiRouter.post('/auth', authController.post);

export default apiRouter;
