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
  const teamToUpdate = await Team.findOne({where: {name: details.name}});
  const message = await isUpdateValid(details);
  if (message === undefined && teamToUpdate) {
    if (details.wins) {
      teamToUpdate.wins = details.wins;
    }
    if (details.foundationYear) {
      teamToUpdate.foundationYear = details.foundationYear;
    }
    if (details.feePaid) {
      teamToUpdate.feePaid = details.feePaid;
    }
    await teamToUpdate.save();
  } else if (!teamToUpdate) {
    throw new ValidationError(
        `Team not exist with name ${details.name}`);
  } else {
    throw new ValidationError(message);
  }
};

const deleteTeam = async (details) => {
  const teamToDelete = await Team.findOne({where: {name: details.name}});
  if (teamToDelete) {
    await teamToDelete.destroy();
  } else {
    throw new Error(`Team not exist with name ${details.name}`);
  };
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
    return 'Fee paid value should be type of boolean';
  }
};

const isUpdateValid = async (details) => {
  if (!isWinsValid(details.wins) && details.wins) {
    return 'Invalid number of wins';
  }
  if (!isFoundationYearValid(details.foundationYear) &&
    details.foundationYear) {
    return 'Invalid foundation year';
  }
  if (!isFeePaidValid(details.feePaid) && details.feePaid) {
    return 'Fee paid value should be type of boolean';
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
  if (!teamName || format.test(teamName) ||
    teamName.length > 25 || teamName.length < 3) {
    return false;
  }
  return true;
};

const isWinsValid = (wins) => {
  const format = /[0-9]/;
  if (wins && (wins > 30 || wins < 0 || !format.test(wins))) {
    return false;
  }
  return true;
};

const isFoundationYearValid = (year) => {
  const format = /[0-9]/;
  if (year && (year > 2023 || year < 1946 || !format.test(year))) {
    return false;
  }
  return true;
};

const isFeePaidValid = (isPaid) => {
  if (isPaid !== undefined &&
    isPaid.toString() !== 'true' && isPaid.toString() !== 'false') {
    return false;
  }
  return true;
};

export default {getAllTeams, createTeam, updateTeam, deleteTeam};
