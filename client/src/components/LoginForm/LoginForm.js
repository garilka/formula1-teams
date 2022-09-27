import React from 'react';
import './LoginForm.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import useLoginForm from './../../hooks/useLoginForm';
import MainPage from '../../features/MainPage/MainPage';
import validate from './../../services/loginFormValidation';

const LoginForm = (props) => {
  const {
    clickHandler, handleChange, handleSubmit,
    values, errors, serverError, unsuccessfulLogin} =
    useLoginForm(
        validate,
        props.setRenderedComponent,
    );

  const registerComponent =
    <RegisterForm setRenderedComponent={props.setRenderedComponent}/>;
  const mainPageComponent =
    <MainPage setRenderedComponent={props.setRenderedComponent}/>;

  return (
    <form
      className='loginForm'
      onSubmit={handleSubmit}>
      <h3>Login</h3>
      {serverError.message ? <p>{serverError.message}</p> : null}
      {unsuccessfulLogin.message ? <p>{unsuccessfulLogin.message}</p> : null}
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
      <button>Login</button>
      <br />
      <a
        onClick={(e) => clickHandler(e, registerComponent)}
        href="#">Don&apos;t have an account yet?
      </a>
      <br />
      <a
        onClick={(e) => clickHandler(e, mainPageComponent)}
        href="#">Continue without login
      </a>
    </form>
  );
};

export default LoginForm;
