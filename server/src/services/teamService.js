import Model from '../db/models';
import jwt from 'jsonwebtoken';
import {ValidationError} from './errorService.js';
const {Team} = Model;
const {verify} = jwt;

const getAllTeams = async () => {
  const teams = await Team.findAll({
    attributes: ['name', 'foundationYear', 'wins', 'feePaid'],
  });
  return teams;
};

const createTeam = async (details) => {
  const message = await isInputValid(details);
  if (message === undefined) {
    const newTeam = await Team.create(details);
    return newTeam;
  } else {
    throw new ValidationError(message);
  }
};

const decodeToken = (token) => {
  if (token.startsWith('Bearer')) {
    token = token.slice(7);
  }
  const decoded = verify(token, process.env.TOKEN_SECRET);
  return decoded;
};

const isTeamNameUnique = async (teamName) => {
  const nameFound = await Team.findOne({
    subQuery: false,
    where: {name: teamName},
  });
  console.log(nameFound);
  if (nameFound !== undefined) {
    return false;
  }
  return true;
};

const isInputValid = async (details) => {
  if (!isTeamNameUnique(details.name)) {
    return 'Team already exist';
  }
  if (!isTeamNameValid(details.name)) {
    return 'Invalid team name';
  }
  if (!isWinsValid(details.wins)) {
    return 'Invalid number of wins';
  }
  if (!isFoundationYearValid(details.foundationYear)) {
    return 'Invalid foundation year';
  }
  if (!isFeePaidValid(details.feePaid)) {
    return 'Fee paid value should be 0 or 1';
  }
};

const isTeamNameValid = (teamName) => {
  const format = /[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/;
  if (teamName.length > 25 || teamName.length < 3 || format.test(teamName)) {
    return false;
  }
  return true;
};

const isWinsValid = (wins) => {
  const format = /[0-9]/;
  if (wins > 30 || wins < 0 || !format.test(wins)) {
    return false;
  }
  return true;
};

const isFoundationYearValid = (year) => {
  const format = /[0-9]/;
  if (year > 2023 || year < 1946 || !format.test(year)) {
    return false;
  }
  return true;
};

const isFeePaidValid = (isPaid) => {
  const format = /[0-1]/;
  if (isPaid.toString().length > 1 || !format.test(isPaid)) {
    return false;
  }
  return true;
};

export default {getAllTeams, createTeam, decodeToken};
