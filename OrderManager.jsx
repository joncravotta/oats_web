import React from 'react';
import OrderManagerStatusBar from './OrderManagerStatusBar.jsx';
import LocationsView from './LocationsView.jsx';
import GrainView from './GrainView.jsx';
import ToppingsView from './ToppingsView.jsx';

var OrderManager = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      orderTotalPrice: 0
    };
  },
  updateOrderState: function(num){
    this.setState({orderState: num});
  },
  addOrderPrice: function(itemPrice){
    var currentOrderPrice = this.state.orderTotalPrice;
    var newOrderPrice = currentOrderPrice + itemPrice;
    function roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
    }
    var newOrderPriceFixed = roundToTwo(newOrderPrice);
    this.setState({orderTotalPrice: newOrderPriceFixed});
  },
  subtractOrderPrice: function(itemPrice){
    var currentOrderPrice = this.state.orderTotalPrice;
    var newOrderPrice = currentOrderPrice - itemPrice;
    function roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
    }
    var newOrderPriceFixed = roundToTwo(newOrderPrice);
    this.setState({orderTotalPrice: newOrderPriceFixed});
  },
  handleOrderState: function() {
    if(this.state.orderState == 1){
      return(<LocationsView updateState={this.updateOrderState}/>);
    } else if (this.state.orderState == 2) {
      return(<GrainView updateOrderPrice={this.addOrderPrice} updateState={this.updateOrderState}/>);
    } else if (this.state.orderState == 3) {
      return(<ToppingsView updateState={this.updateOrderState} addOrderPrice={this.addOrderPrice} subtractOrderPrice={this.subtractOrderPrice} orderTotal={this.state.orderTotalPrice} />);
    }
  },
   render: function() {
     console.log("order state" + this.state.orderTotalPrice);
      return (
         <div className="order-container">
         <OrderManagerStatusBar orderTotal={this.state.orderTotalPrice} currentOrderState={this.state.orderState}/>
          {this.handleOrderState()}
         </div>
      );
   }
})

export default OrderManager;
