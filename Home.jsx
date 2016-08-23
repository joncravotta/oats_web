import React from 'react';

class Home extends React.Component {
   render() {
      return (
         <div>
            <div className="home-order-nav">
            <div className="home-start-order-button">ORDER NOW</div>
            </div>
            <div className="home-landing">
              <div className="nav-logo"><img src={'./assets/logos/nighty-oats-green-logo.png'} /></div>
            </div>
            <div className="home-cta"></div>
         </div>
      );
   }
}

export default Home;
