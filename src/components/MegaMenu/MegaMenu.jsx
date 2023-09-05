import React from 'react';
import "./MegaMenu.css"
import { NavLink } from 'react-router-dom';
const MegaMenu = () => {
  return (
    <div>
      <div className="lines">
      
                <NavLink to="/profile">Profile</NavLink>
                <NavLink onClick={() => auth.setIsLoggedIn(false)} to="/login">
                  Logout
                </NavLink>
              

      </div>
    </div>
  );
}

export default MegaMenu;
