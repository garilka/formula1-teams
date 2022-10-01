import React from 'react';
import './EditTeamPage.css';
import useEditTeamPage from '../../hooks/useEditTeamPage';

const EditTeamPage = (props) => {
  const {handleChange, handleChecked, handleExit, handleSubmit, handleDelete,
    values, responseError} =
  useEditTeamPage(
      props.setRenderedComponent,
      props.teamName,
      props.feePaid,
  );

  return (
    <div className='EditTeam'>
      <form
        className='EditTeamForm'
        onSubmit={handleSubmit}>
        <div className='topIcons'>
          <div className='carIcon'>Edit team 🖊️</div>
          <div
            className='gearIcon'
            onClick={handleExit}>
            ✖️
          </div>
        </div>

        <div className='teamName'>
          {props.teamName}
        </div>

        <div className='teamInfos'>
          <div className='worldChampionships'>
            <label className='infoLabel'>World Championships</label>
            <br/>
            <input
              name='wins'
              id='wins'
              type='number'
              value={values.wins}
              placeholder={props.worldChampionships}
              onChange={handleChange}
            />
          </div>
          <div className='yearOfFoundation'>
            <label className='infoLabel'>Year Of Foundation</label>
            <br/>
            <input
              name='foundationYear'
              id='foundationYear'
              type='number'
              min='1946'
              max='2023'
              placeholder={props.yearOfFoundation}
              value={values.foundationYear}
              onChange={handleChange}
            />
          </div>
          <div className='feePaid'>
            <label className='infoLabel'>Entry Fee Paid</label>
            <br/>
            <input
              name='feePaid'
              id='feePaid'
              type='checkbox'
              value={values.feePaid}
              onClick={handleChecked}
            />
          </div>
        </div>
        {responseError.message ? <p>{responseError.message}</p> : null}
        <button>Save</button>
      </form>
      <button className='delete' onClick={handleDelete}>🗑️ Delete team </button>
    </div>
  );
};

export default EditTeamPage;
