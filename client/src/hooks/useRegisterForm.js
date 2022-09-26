import React, {useState, useEffect} from 'react';
import SuccessfulRegistration
  from '../components/SuccessfulRegistration/SuccessfulRegistartion';

const useRegisterForm = (validate, setRenderedComponent) => {
  // custom hooks
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordAgain: '',
    nickname: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usedEmail, setUsedEmail] = useState({});
  const [responseError, setResponseError] = useState({});

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
    const nickname = values.nickname;

    fetch(process.env.REACT_APP_BACKEND_URL + '/api/user', {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password,
        nickname: nickname,
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
            setRenderedComponent(<SuccessfulRegistration
              setRenderedComponent={setRenderedComponent}/>);
          } else {
            setUsedEmail({message: (await response.json()).message});
          }
        })
        .catch((error) => {
          setResponseError({message: error.message});
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

  return {handleChange, handleSubmit, values, errors, usedEmail, responseError};
};

export default useRegisterForm;
