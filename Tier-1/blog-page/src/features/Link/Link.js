import React from 'react';

function Link() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
        </ul>
      </>
    );
}

export default Link;

