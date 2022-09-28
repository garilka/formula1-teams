import teamService from '../../services/teamService';

const get = async (req, res) => {
  try {
    console.log('team');
    return res.status(200).json(await teamService.getAllTeams());
  } catch (error) {
    console.log('no team');
    return res.status(500).json(error);
  }
};

export default {get};
