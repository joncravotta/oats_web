import React from 'react';
import OrderManagerStatusBar from './OrderManagerStatusBar.jsx';
import LocationsView from './LocationsView.jsx';
import GrainView from './GrainView.jsx';
import MilkView from './MilkView.jsx';
import ToppingsView from './ToppingsView.jsx';
import SubmitOrderView from './SubmitOrderView.jsx';

var OrderManager = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      orderTotalPrice: 0,
      orderLocation: "",
      orderOatType: "",
      orderMilkType: "",
      orderToppings: []
    };
  },
  updateOrderState: function(num){
    this.setState({orderState: num});
  },
  updateOrderLocationState: function(location){
    this.setState({orderLocation: location});
  },
  updateOatState: function(oat){
    this.setState({orderOatType: oat});
  },
  updateMilkState: function(milk){
    this.setState({orderMilkType: milk});
  },
  updateOrderToppings: function(toppings){
    this.setState({orderToppings: toppings})
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
      return(<LocationsView updateState={this.updateOrderState} updateOrderLocation={this.updateOrderLocationState}/>);
    } else if (this.state.orderState == 2) {
      return(<GrainView updateOrderPrice={this.addOrderPrice} updateState={this.updateOrderState} updateOatState={this.updateOatState}/>);
    } else if (this.state.orderState == 3) {
      return(<MilkView updateOrderPrice={this.addOrderPrice} updateState={this.updateOrderState} updateMilkState={this.updateMilkState}/>);
    } else if (this.state.orderState == 4) {
      return(<ToppingsView updateState={this.updateOrderState} addOrderPrice={this.addOrderPrice} subtractOrderPrice={this.subtractOrderPrice} orderTotal={this.state.orderTotalPrice} updateToppings={this.updateOrderToppings} />);
    } else if (this.state.orderState == 5) {
      return(<SubmitOrderView updateState={this.updateOrderState} orderTotal={this.state.orderTotalPrice} location={this.state.orderLocation} milk={this.state.orderMilkType} oat={this.state.orderOatType} toppings={this.state.orderToppings} />);
    }
  },
   render: function() {
     console.log("order state" + this.state.orderTotalPrice);
      return (
         <div className="order-container">
         <OrderManagerStatusBar orderTotal={this.state.orderTotalPrice} location={this.state.orderLocation} currentOrderState={this.state.orderState} oat={this.state.orderOatType} milk={this.state.orderMilkType}/>
          {this.handleOrderState()}
         </div>
      );
   }
})

export default OrderManager;
