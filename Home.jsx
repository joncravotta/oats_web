import React from 'react';
import Parse from 'parse';
Parse.initialize("renbsi62bcwsv4217fbfbbg375bgn927656");
Parse.serverURL = 'https://nightyoats.herokuapp.com/parse';
// var GameScore = Parse.Object.extend("Ingredient");
// var query = new Parse.Query(GameScore);
// query.limit(10);
// query.find({
//   success: function(gameScore) {
//     // The object was retrieved successfully.
//     console.log("init");
//     console.log(gameScore);
//   },
//   error: function(object, error) {
//     // The object was not retrieved successfully.
//     // error is a Parse.Error with an error code and message.
//   }
// });

var Home = React.createClass({
  updateAppState: function(){
    this.props.updateState(2);
  },
   render: function() {
      return (
         <div>
            <div className="home-order-nav">
            <div className="home-start-order-button" onClick={this.updateAppState}>ORDER NOW</div>
            </div>
            <div className="home-landing">
              <div className="nav-logo"><img src={'./assets/logos/nighty-oats-green-logo.png'} /></div>
            </div>
            <div className="home-cta"></div>
         </div>
      );
   }
})

export default Home;
