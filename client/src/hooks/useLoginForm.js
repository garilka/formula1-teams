import React, {useState, useEffect} from 'react';
import MainPage from '../features/MainPage/MainPage';

// save token to LocalStorage:
// https://stackoverflow.com/questions/63141982/how-to-store-and-handle-jwt-tokens-on-front-end-using-fetch-and-how-to-store-it

const useLoginForm = (validate, setRenderedComponent) => {
  // custom hooks
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState({});
  const [unsuccessfulLogin, setUnsuccessfulLogin] = useState({});

  // handle click
  const clickHandler = (e, goal) => {
    e.preventDefault();
    setRenderedComponent(goal);
  };

  // handle change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle fetch
  const handleFetch = () => {
    const email = values.email;
    const password = values.password;

    fetch(process.env.REACT_APP_BACKEND_URL + '/api/auth', {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
        .then(async (response) => {
          if (response.status === 500) {
            throw new Error('Server error');
          } else if (response.status === 200) {
            await localStorage.setItem(
                'token', JSON.stringify((await response.json()).token));
            setRenderedComponent(<MainPage />);
          } else {
            setUnsuccessfulLogin(
                {message: 'Your attempt to login was unsuccessful,' +
                ' please try again!'});
          }
        })
        .catch((error) => {
          setServerError({message: 'Server error, please try again later!'});
        });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // prevent submit if there are any errors
  useEffect(
      () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          handleFetch();
        }
      },
      [errors],
  );

  return {
    clickHandler, handleChange, handleSubmit,
    values, errors, serverError, unsuccessfulLogin};
};

export default useLoginForm;
