import express from 'express';
import teamController from '../controllers/teamController';
const teamRouter = express.Router();

teamRouter.get('/all', teamController.get);
teamRouter.post('/', teamController.post);
teamRouter.patch('/', teamController.patch);

export default teamRouter;
