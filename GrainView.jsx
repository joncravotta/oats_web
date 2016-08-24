import React from 'react';

var GrainView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      locations: ["Union Square", "Upper East Side", "Soho", "Upper west side", "GreenPoint"]
    };
  },
  updateOrderState: function() {
    this.props.updateState(3);
  },
   render: function() {
      return (
         <div className="location-container">
          grain view
         </div>
      );
   }
})

export default GrainView;
