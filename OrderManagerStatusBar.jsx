import React from 'react';

var OrderManagerStatusBar = React.createClass({
  showCurrentTabCount: function() {
    var tabIdentifiers = [];
    var x = 0;
    for (var i = 1; i <= 5; i++) {
      if (i < this.props.currentOrderState){
        switch (i) {
          case 1:
            tabIdentifiers.push(<div key={i} className="order-status-active"><span>{this.props.location}</span></div>);
          case 2:
            tabIdentifiers.push(<div key={i} className="order-status-active"><span>{this.props.oat}</span></div>);
          case 3:
            tabIdentifiers.push(<div key={i} className="order-status-active"><span>{this.props.milk}</span></div>);
          case 4:
            tabIdentifiers.push(<div key={i} className="order-status-active"><span>Toppings: </span></div>);
          default:
          break;
        }
      } else {
          if (i == 5) {
            tabIdentifiers.push(<div className="order-status-bar-tab">Total: ${this.props.orderTotal}</div>);
            break;
          }
          tabIdentifiers.push(<div key={i} className="order-status-inactive"></div>);
        }
    }
    console.log(tabIdentifiers)
    return(<div className="order-status-bar">{tabIdentifiers}</div>);
  },

   render: function() {
      return (
         <div className="order-status-bar-container">
           {this.showCurrentTabCount()}
         </div>
      );
   }
})

export default OrderManagerStatusBar;
