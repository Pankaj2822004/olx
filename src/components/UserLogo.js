import React from 'react';

const UserLogo = ({ email }) => {
  const initials = email ? email.charAt(0).toUpperCase() : '';
  
  // Define style object with conditional properties based on initials
  const style = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f11946',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    position: 'absolute' ,
    top: '20px',
    right: '20px',
    zIndex: 9999,
    margin: '-12px 190px',
  };

  // Conditionally modify style if initials exist
  if (!initials) {
    // If initials do not exist, adjust style properties (e.g., hide the element)
    style.display = 'none';
  }

  return (
    // Render div with dynamically applied style
    <div style={style}>
      {initials}
    </div>
  );
};

export default UserLogo;