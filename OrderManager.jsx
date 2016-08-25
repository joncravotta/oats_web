import React from 'react';
import OrderManagerStatusBar from './OrderManagerStatusBar.jsx';
import LocationsView from './LocationsView.jsx';
import GrainView from './GrainView.jsx';
import ToppingsView from './ToppingsView.jsx';

var OrderManager = React.createClass({
  getInitialState: function() {
    return {
      orderState: 3
    };
  },
  updateOrderState: function(num){
    this.setState({orderState: num});
  },
  handleOrderState: function() {
    if(this.state.orderState == 1){
      return(<LocationsView updateState={this.updateOrderState}/>);
    } else if (this.state.orderState == 2) {
      return(<GrainView updateState={this.updateOrderState}/>);
    } else if (this.state.orderState == 3) {
      return(<ToppingsView updateState={this.updateOrderState}/>);
    }
  },
   render: function() {
     console.log("order state" + this.state.orderState);
      return (
         <div className="order-container">
         <OrderManagerStatusBar currentOrderState={this.state.orderState}/>
          {this.handleOrderState()}
         </div>
      );
   }
})

export default OrderManager;
