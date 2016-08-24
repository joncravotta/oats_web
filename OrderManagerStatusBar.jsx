import React from 'react';

var OrderManagerStatusBar = React.createClass({
  showCurrentTabCount: function() {
    var tabIdentifiers = [];
    var x = 0;
    for (var i = 0; i < 5; i++) {
      if (i < this.props.currentOrderState){
          tabIdentifiers.push(<div key={i} className="order-status-active"></div>);
        } else {
          tabIdentifiers.push(<div key={i} className="order-status-inactive"></div>);
        }
    }
    console.log(tabIdentifiers)
    return(<div className="order-status-bar">{tabIdentifiers}</div>);
  },

   render: function() {
      return (
         <div>
           {this.showCurrentTabCount()}
         </div>
      );
   }
})

export default OrderManagerStatusBar;
