import React from 'react';
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'
import OrderManager from './OrderManager.jsx'

var App = React.createClass({
  getInitialState: function() {
    return {
      appState: 2
    };
  },
  updateAppState: function(num) {
    console.log("oh yeah");
    this.setState({appState: num});
  },
  handleAppState: function() {
    if(this.state.appState == 1){
      return(
        <div>
        <Navigation/>
        <Home updateState={this.updateAppState}/>
        </div>
      );
    } else if(this.state.appState == 2){
      return (
        <div>
        <Navigation/>
        <OrderManager updateState={this.updateAppState}/>
        </div>
      );
    }
  },
   render: function() {
      return(
        <div className="app-container">
         {this.handleAppState()}
        </div>
       );
   }
})

export default App;
