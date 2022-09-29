import Model from '../db/models';
import {ValidationError} from './errorService.js';
const {Team} = Model;

const getAllTeams = async () => {
  const teams = await Team.findAll({
    attributes: ['name', 'foundationYear', 'wins', 'feePaid'],
  });
  return teams;
};

const createTeam = async (details) => {
  const message = await isInputValid(details);
  const uniqueTeam = await isTeamNameUnique(details.name);
  if (message === undefined && uniqueTeam) {
    const newTeam = await Team.create(details);
    return newTeam;
  } else if (!uniqueTeam) {
    throw new Error('Team already exists');
  } else {
    throw new ValidationError(message);
  }
};

const updateTeam = async (details) => {
  const message = await isInputValid(details);
  if (message === undefined) {
    const teamToUpdate = await Team.findOne({where: {name: details.oldName}});
    await teamToUpdate.set({
      name: details.name,
      foundationYear: details.foundationYear,
      wins: details.wins,
      feePaid: details.feePaid,
    });
    await teamToUpdate.save();
  } else {
    throw new ValidationError(message);
  }
};

const isInputValid = async (details) => {
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

const isTeamNameUnique = async (teamName) => {
  const nameFound = await Team.findOne({where: {name: teamName}});
  if (nameFound !== null) {
    return false;
  }
  return true;
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

export default {getAllTeams, createTeam, updateTeam};
