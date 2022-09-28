import React from 'react';
import './Login.css';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
  return (
    <div className='loginWrapper'>
      <LogoAndTitle />
      <LoginForm setRenderedComponent={props.setRenderedComponent}/>
    </div>
  );
};

export default Login;
