import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './rest/routes/index.js';
import auth from './rest/middleware/auth.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(auth);
app.use(routes);

export default app;
