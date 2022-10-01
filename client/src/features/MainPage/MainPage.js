import React, {useEffect, useState} from 'react';
import './MainPage.css';
import LogoAndTitle from '../../components/LogoAndTitle/LogoAndTitle';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import LoginButton from '../../components/LoginButton/LoginButton';
import PostList from '../../components/PostList/PostList';
import CreateTeamButton
  from '../../components/CreateTeamButton/CreateTeamButton';

const MainPage = (props) => {
  const [renderedButton, setRenderedButton] = useState(<></>);
  const [visible, setVisible] = useState('hidden');
  const [inMemoryToken] =
  useState(JSON.parse(localStorage.getItem('token')));

  useEffect(() => {
    if (inMemoryToken === null) {
      setVisible('hidden');
      setRenderedButton(
          <LoginButton setRenderedComponent={props.setRenderedComponent}/>,
      );
    } else {
      setVisible('visible');
      setRenderedButton(
          <LogoutButton setRenderedComponent={props.setRenderedComponent}/>,
      );
    }
  }, [inMemoryToken]);

  if (props.setRenderedComponent) {
    return (
      <div className='mainPageWrapper'>
        <div className='header'>
          <div>
            <LogoAndTitle />
            Informations about the next race&apos;s groups
          </div>
          {renderedButton}
        </div>
        <CreateTeamButton
          visibility={visible}
          setRenderedComponent={props.setRenderedComponent}/>
        <PostList setRenderedComponent={props.setRenderedComponent}/>
      </div>
    );
  } else {
    window.location.reload();
  }
};

export default MainPage;
