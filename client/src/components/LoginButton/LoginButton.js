import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

const LoginButton = (props) => {
  const loginFormComponent =
    <LoginForm setRenderedComponent={props.setRenderedComponent}/>;

  const handleClick= (e, goal) => {
    e.preventDefault();
    props.setRenderedComponent(goal);
    window.location.reload();
  };

  return (
    <button type='button' onClick={(e) => handleClick(e, loginFormComponent)}>
      Login
    </button>
  );
};

export default LoginButton;
