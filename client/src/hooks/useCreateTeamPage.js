import React, {useState} from 'react';
import MainPage from '../features/MainPage/MainPage';

const useCreateTeamPage = (setRenderedComponent) => {
  const [responseError, setResponseError] = useState({});
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    name: '',
    foundationYear: 0,
    wins: 0,
    feePaid: false,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChecked = (e) => {
    setChecked(!checked);
    setValues({
      ...values,
      feePaid: !checked,
    });
  };

  const handleExit = (e) => {
    setRenderedComponent(<MainPage
      setRenderedComponent={setRenderedComponent}/>);
  };

  const handleFetch = () => {
    const requestBody = {
      name: values.name,
      wins: values.wins,
      foundationYear: values.foundationYear,
      feePaid: values.feePaid,
    };

    console.log(requestBody);

    const localStorageToken = JSON.parse(localStorage.getItem('token'));

    fetch(process.env.REACT_APP_BACKEND_URL + '/api/team', {
      method: 'post',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorageToken,
      },
    }).then(async (response) => {
      if (response.status === 200) {
        setRenderedComponent(<MainPage
          setRenderedComponent={setRenderedComponent}/>);
      } else {
        const message = (await response.json()).message;
        setResponseError({message: message});
      }
    }).catch(async (error) => {
      setResponseError({message: error.message});
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch();
  };

  return {handleChange, handleChecked, handleExit, handleSubmit,
    values, responseError};
};

export default useCreateTeamPage;
