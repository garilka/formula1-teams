import React from 'react';
import './LogoutButton.css';

const LogoutButton = (props) => {
  const handleClick= (e) => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <button className='button'
      type='button'
      onClick={(e) => handleClick(e)}>
      Logout
    </button>
  );
};

export default LogoutButton;
