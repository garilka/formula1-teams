import React from 'react';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
  return (
    <div>
      <LogoAndTitle />
      <LoginForm setRenderedComponent={props.setRenderedComponent}/>
    </div>
  );
};

export default Login;
