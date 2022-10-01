import React from 'react';
import './CreateTeamPage.css';
import useCreateTeamPage from '../../hooks/useCreateTeamPage';

const CreateTeamPage = (props) => {
  const {handleChange, handleChecked, handleExit, handleSubmit,
    values, responseError} =
  useCreateTeamPage(
      props.setRenderedComponent,
  );

  return (
    <div className='CreateTeam'>
      <form
        className='CreateTeamForm'
        onSubmit={handleSubmit}>
        <div className='topIcons'>
          <div className='carIcon'>Create new team ✨</div>
          <div
            className='gearIcon'
            onClick={handleExit}>
            ✖️
          </div>
        </div>

        <div className='teamName'>
          <label className='infoLabel'>Team name</label>
          <br/>
          <input
            name='name'
            id='name'
            type='text'
            placeholder='Ex. Hot Wheels'
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className='teamInfos'>
          <div className='worldChampionships'>
            <label className='infoLabel'>World Championships</label>
            <br/>
            <input
              name='wins'
              id='wins'
              type='text'
              value={values.wins}
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
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTeamPage;
