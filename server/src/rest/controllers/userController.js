import userService from '../../services/userService.js';
import {ValidationError} from '../../services/errorService.js';

const post = async (req, res) => {
  try {
    return res.status(200).json(await userService.createUser({...req.body}));
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({message: error.message});
    } else {
      throw error;
    }
  }
};

export default {
  post,
};
