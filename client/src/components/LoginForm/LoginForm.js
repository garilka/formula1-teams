import React from 'react';
import './LoginForm.css';
import Register from '../../features/Register/Register';
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
    <Register setRenderedComponent={props.setRenderedComponent}/>;
  const mainPageComponent =
    <MainPage setRenderedComponent={props.setRenderedComponent}/>;

  return (
    <form
      className='loginForm'
      onSubmit={handleSubmit}>
      <h3 className='loginTitle'>Welcome back!</h3>
      {serverError.message ? <p>{serverError.message}</p> : null}
      {unsuccessfulLogin.message ? <p>{unsuccessfulLogin.message}</p> : null}
      <label className='loginLabel' htmlFor="email">E-mail</label>
      <input
        className='loginInput'
        name="email"
        id="email"
        type="text"
        value={values.email}
        onChange={handleChange}
        autoFocus
      />
      {errors.email && <p>{errors.email}</p>}
      <label className='loginLabel' htmlFor="password">Password</label>
      <input
        className='loginInput'
        name="password"
        id="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button className='loginFormButton'>Login</button>
      <a
        className='link'
        onClick={(e) => clickHandler(e, registerComponent)}
        href="#">Don&apos;t have an account yet?
      </a>
      <a
        className='link'
        onClick={(e) => clickHandler(e, mainPageComponent)}
        href="#">Continue without login
      </a>
    </form>
  );
};

export default LoginForm;
