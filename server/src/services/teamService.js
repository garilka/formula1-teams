import Model from '../db/models';
const {Team} = Model;

const getAllTeams = async () => {
  const teams = await Team.findAll({
    attributes: ['name', 'foundation_year', 'wins', 'fee_paid'],
  });
  return teams;
};

export default {getAllTeams};
