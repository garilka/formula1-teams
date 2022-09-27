import {ValidationError} from '../../services/errorService.js';
import userService from '../../services/userService.js';

const post = async (req, res) => {
  try {
    return res.json({token: await userService.loginUser({...req.body})});
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({message: error.message});
    } else {
      console.log(error.message);
      return res.status(500).json({message: 'Server Error'});
    }
  }
};

export default {
  post,
};
