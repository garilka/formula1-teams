import React from 'react';
import './Register.css';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = (props) => {
  return (
    <div className='registerWrapper'>
      <LogoAndTitle />
      <RegisterForm setRenderedComponent={props.setRenderedComponent}/>
    </div>
  );
};

export default Register;
