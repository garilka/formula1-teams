import React, {useEffect, useState} from 'react';
import './MainPage.css';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import LoginButton from '../../components/LoginButton/LoginButton';
import BlogPost from '../../components/BlogPost/BlogPost';

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
    <div className='mainPageWrapper'>
      <div className='header'>
        <div>
          <LogoAndTitle />
          Informations about the next race&apos;s groups
        </div>
        {renderedButton}
      </div>

      <BlogPost
        teamName='Mercedes'
        worldChampionships='2'
        yearOfFoundation='2000'
        feePaid='✔'
      />
    </div>
  );
};

export default MainPage;
