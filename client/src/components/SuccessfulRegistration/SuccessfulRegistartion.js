import React from 'react';
import './SuccessfulRegistration.css';
import LoginForm from '../LoginForm/LoginForm';

const SuccessfulRegistration = (props) => {
  const clickToLogIn = (e) => {
    e.preventDefault();
    props.setRenderedComponent(
        <LoginForm setRenderedComponent={props.setRenderedComponent}/>);
  };

  return (
    <div id='wrapperdiv'>
      <div className='successMessage'>
        <h2>Your registration was succesful!</h2>
        <a
          onClick={clickToLogIn}
          href="#">You can log in here.</a>
      </div>
    </div>
  );
};

export default SuccessfulRegistration;
