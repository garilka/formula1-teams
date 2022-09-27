import React from 'react';

const LogoutButton = (props) => {
  const handleClick= (e) => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <button type='button' onClick={(e) => handleClick(e)}>
      Logout
    </button>
  );
};

export default LogoutButton;
