import React from 'react';

var LocationsView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      locations: ["Union Square", "Upper East Side", "Soho", "Upper west side", "GreenPoint"]
    };
  },
  updateOrderState: function(location) {
    this.props.updateOrderLocation(location);
    this.props.updateState(2);
  },
   render: function() {
      return (
         <div className="location-container">
          <h1 className="order-selection-title">Pick Your Location</h1>
          <div className="primary-line"></div>
          {this.state.locations.map(function(location){
            return (
               <div className="location-card" onClick={this.updateOrderState.bind(this, location)}>
                 <div className="location-card-left">
                  {location}
                  <span>199 Prince St, New York, NY 10012</span>
                 </div>
                 <div className="location-card-right"></div>
               </div>
            );
          }.bind(this))}
         </div>
      );
   }
})

export default LocationsView;
