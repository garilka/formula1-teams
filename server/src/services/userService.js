import Model from '../db/models';
const {User} = Model;
import {ValidationError} from './errorService.js';
import encryptionService from './encryptionService.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const createUser = async (details) => {
  const message = await isInputValid(details);
  if (message != undefined) {
    throw new ValidationError(message);
  }

  details.password = await encryptionService.hashPassword(details.password);
  return User.create(details);
};

const loginUser = async (details) => {
  if (!isEmailValid(details.email)) {
    throw new ValidationError('Invalid e-mail');
  }

  if (!details.password) {
    throw new ValidationError('No Password provided');
  };
  const user = await User.findOne({where: {email: details.email}});
  if (user) {
    const result = await bcrypt.compare(details.password, user.password);
    if (result) {
      return generateToken(user);
    } else {
      throw new ValidationError('Unsuccessful Login');
    }
  } else {
    throw new ValidationError('Unsuccessful Login');
  }
};

const generateToken = async (user) => {
  const secretKey = process.env.TOKEN_SECRET;
  const payload = {
    id: user.id,
    email: user.email,
  };
  try {
    const token = jwt.sign({payload}, secretKey);
    return token;
  } catch (err) {
    throw new Error('JWT signing unsuccessful');
  }
};

const isInputValid = async (details) => {
  if (!isNicknameValid(details.nickname)) {
    return 'Invalid nickname';
  } else if (!isPasswordValid(details.password)) {
    return 'Invalid password';
  } else if (!isEmailValid(details.email)) {
    return 'Invalid email';
  } else if (await isEmailAlreadyInUse(details.email)) {
    return 'We already have this email';
  }
};

const isNicknameValid = (nickname) => {
  const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (nickname.length < 4 || format.test(nickname)) {
    return false;
  }

  return true;
};

const isPasswordValid = (password) => {
  const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
  const last = password.charAt(password.length - 1);
  if (
    password.length < 8 ||
    !format.test(password) ||
    !/\d/.test(password) ||
    format.test(last) ||
    /\d/.test(last)
  ) {
    return false;
  }

  return true;
};

const isEmailValid = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

const isEmailAlreadyInUse = async (mail) => {
  const found = await User.findAll({
    where: {
      email: mail,
    },
  });
  if (found.length == 0) {
    return false;
  }
  return true;
};

export default {
  createUser,
  loginUser,
};

export {
  isInputValid,
  isNicknameValid,
  isPasswordValid,
  isEmailValid,
  isEmailAlreadyInUse,
  generateToken,
};
