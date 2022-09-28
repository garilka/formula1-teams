import express from 'express';
import teamController from '../controllers/teamController';
const teamRouter = express.Router();

teamRouter.get('/', teamController.get);

export default teamRouter;
