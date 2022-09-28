import React from 'react';
import './RegisterForm.css';
import Login from '../../features/Login/Login';
import validate
  from './../../services/registerFormValidation';
import useRegisterForm from './../../hooks/useRegisterForm';

const RegisterForm = (props) => {
  const {handleChange, handleSubmit, values, errors, usedEmail, responseError} =
    useRegisterForm(
        validate,
        props.setRenderedComponent,
    );

  const alreadyHaveAccountHandler = (e) => {
    e.preventDefault();
    props.setRenderedComponent(
        <Login setRenderedComponent={props.setRenderedComponent}/>);
  };

  return (
    <form
      className='registerForm'
      onSubmit={handleSubmit}>
      <h3>Register</h3>
      {responseError.message ? <p>{responseError.message}</p> : null}
      <label htmlFor="email">E-mail:</label> <br />
      <input
        name="email"
        id="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        autoFocus
      />
      {errors.email && <p>{errors.email}</p>}
      {usedEmail.message ? <p>{usedEmail.message}</p> : null}
      <br />
      <label htmlFor="password">Password:</label> <br />
      <input
        name="password"
        id="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <br />
      <label htmlFor="passwordAgain">Password again:</label> <br />
      <input
        name="passwordAgain"
        id="passwordAgain"
        type="password"
        value={values.passwordAgain}
        onChange={handleChange}
      />
      {errors.passwordAgain && <p>{errors.passwordAgain}</p>}
      <br />
      <label htmlFor="nickname">Nickname:</label> <br />
      <input
        name="nickname"
        id="nickname"
        type="text"
        value={values.nickname}
        onChange={handleChange}
      />
      {errors.nickname && <p>{errors.nickname}</p>}
      <br />
      <button>Submit</button>
      <br />
      <a
        onClick={alreadyHaveAccountHandler}
        href="#">Already have an account?
      </a>
    </form>
  );
};

export default RegisterForm;
