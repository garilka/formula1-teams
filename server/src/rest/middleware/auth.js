import pkg from 'jsonwebtoken';
const {verify} = pkg;
import {allowedRoutes} from './authConfig.js';

const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];

  const path = req._parsedUrl.pathname;
  if (allowedRoutes.includes(path)) {
    return next();
  }

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    if (token.startsWith('Bearer')) {
      token = token.slice(7);
    }
    const decoded = verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid token');
  }
  next();
};

export default verifyToken;
