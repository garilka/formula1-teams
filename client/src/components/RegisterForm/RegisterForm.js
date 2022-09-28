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
      <h3 className='registerTitle'>Create new account</h3>
      {responseError.message ? <p>{responseError.message}</p> : null}
      <label className='registerLabel' htmlFor="email">E-mail</label>
      <input
        className='registerInput'
        name="email"
        id="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        autoFocus
      />
      {errors.email && <p>{errors.email}</p>}
      {usedEmail.message ? <p>{usedEmail.message}</p> : null}
      <label className='registerLabel' htmlFor="password">Password</label>
      <input
        className='registerInput'
        name="password"
        id="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <label
        className='registerLabel'
        htmlFor="passwordAgain">
        Password again
      </label>
      <input
        className='registerInput'
        name="passwordAgain"
        id="passwordAgain"
        type="password"
        value={values.passwordAgain}
        onChange={handleChange}
      />
      {errors.passwordAgain && <p>{errors.passwordAgain}</p>}
      <label className='registerLabel' htmlFor="nickname">Nickname</label>
      <input
        className='registerInput'
        name="nickname"
        id="nickname"
        type="text"
        value={values.nickname}
        onChange={handleChange}
      />
      {errors.nickname && <p>{errors.nickname}</p>}
      <button className='registerFormButton'>Submit</button>
      <a
        className='link'
        onClick={alreadyHaveAccountHandler}
        href="#">Already have an account?
      </a>
    </form>
  );
};

export default RegisterForm;
