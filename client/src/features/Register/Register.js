import React from 'react';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = (props) => {
  return (
    <div>
      <LogoAndTitle />
      <RegisterForm setRenderedComponent={props.setRenderedComponent}/>
    </div>
  );
};

export default Register;
