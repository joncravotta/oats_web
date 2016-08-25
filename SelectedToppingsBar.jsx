import React from 'react';


var SelectedToppingsBar = React.createClass({
  removeTopping: function() {

  },
   render: function() {
      return (
         <div className="selected-toppings-container">
          {this.props.toppings.map(function(topping, i){
            var divStyle = {
              backgroundImage: 'url(' + topping.image + ')',
              backgroundSize: "cover"
            };
            return (
              <div className="selected-toppings-card" style={divStyle} key={i}>{topping.name}</div>
            );
          })}
         </div>
      );
   }
})

export default SelectedToppingsBar;
