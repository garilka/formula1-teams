import React from 'react';
import './LoginForm.css';
// import Register from './../../features/Register/Register';
import useFormLogin from './../../hooks/useLoginForm';
import validate from './../../services/loginFormValidation';

const LoginForm = (props) => {
  const {
    clickHandler, handleChange, handleSubmit,
    values, errors, serverError, unsuccessfulLogin} =
    useFormLogin(
        validate,
        props.setRenderedComponent,
    );

  /*   const loginComponent =
    <Register setRenderedComponent={props.setRenderedComponent}/>; */

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
        onClick={(e) => clickHandler(e, loginComponent)}
        href="#">Don&apos;t have an account yet?
      </a>
    </form>
  );
};

export default LoginForm;
