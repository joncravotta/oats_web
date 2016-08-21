import React from 'react';

class Navigation extends React.Component {
   render() {
      return (
         <div className="navbar">
            <div className="nav-logo"><img src={'./assets/logos/night_logo.png'} /></div>
            <div className="nav-title">NIGHTY OATS</div>
            <div className="nav-account">Account</div>
         </div>
      );
   }
}

export default Navigation;
