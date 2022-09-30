import React from 'react';
import './CreateTeamButton.css';
import CreateTeamPage from '../../features/CreateTeamPage/CreateTeamPage';


const CreateTeamButton = (props) => {
  const CreateTeamPageFeatures =
    <CreateTeamPage setRenderedComponent={props.setRenderedComponent}/>;

  const handleClick= (e, goal) => {
    e.preventDefault();
    props.setRenderedComponent(goal);
  };

  return (
    <button
      className='createTeamButton'
      type='button'
      onClick={(e) => handleClick(e, CreateTeamPageFeatures)}>
      + New Team
    </button>
  );
};

export default CreateTeamButton;
