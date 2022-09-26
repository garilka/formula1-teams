import React, {useState, useEffect} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import MainPage from '../MainPage/MainPage';
import './App.css';

const App = () => {
  const [inMemoryToken] =
  useState(JSON.parse(localStorage.getItem('token')));

  const [renderedComponent, setRenderedComponent] = useState(<></>);

  useEffect(() => {
    if (!inMemoryToken) {
      setRenderedComponent(
          <LoginForm setRenderedComponent={setRenderedComponent}/>);
    } else {
      setRenderedComponent(
          <MainPage setRenderedComponent={setRenderedComponent}/>);
    }
  }, [inMemoryToken]);

  return (
    <div className="App">
      {renderedComponent}
    </div>
  );
};

export default App;
