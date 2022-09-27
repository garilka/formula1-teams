import React, {useEffect, useState} from 'react';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import LoginButton from '../../components/LoginButton/LoginButton';

const MainPage = (props) => {
  const [renderedButton, setRenderedButton] = useState(<></>);
  const [inMemoryToken] =
  useState(JSON.parse(localStorage.getItem('token')));

  useEffect(() => {
    if (inMemoryToken === null) {
      setRenderedButton(
          <LoginButton setRenderedComponent={props.setRenderedComponent}/>,
      );
    } else {
      setRenderedButton(
          <LogoutButton setRenderedComponent={props.setRenderedComponent}/>,
      );
    }
  }, [inMemoryToken]);


  return (
    <div>
      <LogoAndTitle />
      Hello, this is main page!
      <br/>
      {renderedButton}
    </div>
  );
};

export default MainPage;
