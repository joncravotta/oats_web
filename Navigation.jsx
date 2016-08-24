import React from 'react';
// import Parse from 'parse';
// Parse.initialize("renbsi62bcwsv4217fbfbbg375bgn927656");
// Parse.serverURL = 'https://nightyoats.herokuapp.com/parse'

// var GameScore = Parse.Object.extend("Ingredient");
// var query = new Parse.Query(GameScore);
// query.get("LqzY3eJsak", {
//   success: function(gameScore) {
//     // The object was retrieved successfully.
//     console.log("init");
//     console.log(gameScore.get("Name"));
//   },
//   error: function(object, error) {
//     // The object was not retrieved successfully.
//     // error is a Parse.Error with an error code and message.
//   }
// });
// console.log(Parse.Object.extend("Order"));

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
