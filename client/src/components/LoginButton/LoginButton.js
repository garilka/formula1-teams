import React from 'react';
import './LoginButton.css';
import Login from '../../features/Login/Login';

const LoginButton = (props) => {
  const loginComponent =
    <Login setRenderedComponent={props.setRenderedComponent}/>;

  const handleClick= (e, goal) => {
    e.preventDefault();
    props.setRenderedComponent(goal);
  };

  return (
    <button
      className='button'
      type='button'
      onClick={(e) => handleClick(e, loginComponent)}>
      Login
    </button>
  );
};

export default LoginButton;
