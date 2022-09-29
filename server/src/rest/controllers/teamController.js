import teamService from '../../services/teamService';
import {ValidationError} from '../../services/errorService';
import encryptionService from '../../services/encryptionService';
import jwt from 'jsonwebtoken';

const {JsonWebTokenError} = jwt;

const get = async (req, res) => {
  try {
    return res.status(200).json(await teamService.getAllTeams());
  } catch (error) {
    return res.status(500).json(error);
  }
};

const post = async (req, res) => {
  try {
    const decodedToken =
      encryptionService.decodeToken(req.headers['authorization']);
    req.body.userId = decodedToken.payload.id;
    return res.status(200).json(await teamService.createTeam({...req.body}));
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({message: error.message});
    }
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({message: error.message});
    }
    return res.status(500).json({message: error.message});
  }
};

const patch = async (req, res) => {
  try {
  } catch (error) {

  }
};

export default {get, post, patch};
