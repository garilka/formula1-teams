import express from 'express';
import {teamController} from '../controllers/index.js';
const teamRouter = express.Router();

teamRouter.get('/all', teamController.get);
teamRouter.post('/', teamController.post);
teamRouter.patch('/', teamController.patch);
teamRouter.delete('/', teamController.del);

export default teamRouter;
