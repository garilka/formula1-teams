import express from 'express';
import {baseController} from '../controllers/index.js';
const baseRouter = express.Router();

baseRouter.get('/', baseController.get);

export default baseRouter;
