import React from 'react';
import SelectedToppingsBar from './SelectedToppingsBar.jsx';
var toppingsData = [{"name": "Blueberries", "image": "http://www.vegkitchen.com/wp-content/uploads/2012/12/Blueberries-on-white.jpg"}, {"name": "Bananas", "image": "https://bigoven-res.cloudinary.com/image/upload/v1440783206/banana.jpg"}, {"name": "Chia Seeds", "image": "http://img.foodnetwork.com/FOOD/2013/08/16/FN_chia-seeds-thinkstock_s4x3_lg.jpg"},{"name": "Chia Seeds", "image": "http://img.foodnetwork.com/FOOD/2013/08/16/FN_chia-seeds-thinkstock_s4x3_lg.jpg"},{"name": "Chia Seeds", "image": "http://img.foodnetwork.com/FOOD/2013/08/16/FN_chia-seeds-thinkstock_s4x3_lg.jpg"}, {"name": "Blueberries", "image": "http://www.vegkitchen.com/wp-content/uploads/2012/12/Blueberries-on-white.jpg"}, {"name": "Blueberries", "image": "http://www.vegkitchen.com/wp-content/uploads/2012/12/Blueberries-on-white.jpg"}];

var ToppingsView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      toppings: toppingsData,
      selectedToppings: []
    };
  },
  updateOrderState: function() {
    this.props.updateState(3);
  },
  addTopping: function(grain) {
    var newArray = this.state.selectedToppings;
    newArray.push(grain);
    this.setState({selectedToppings: newArray});
  },
  removeTopping: function() {

  },
   render: function() {
     console.log(this.state.selectedToppings);
      return (
         <div className="order-selection-container">
         <SelectedToppingsBar toppings={this.state.selectedToppings} />
           <h1 className="order-selection-title">Pick your toppings</h1>
           <div className="order-selection-card-container">
              {this.state.toppings.map(function(topping, i){
                var divStyle = {
                  backgroundImage: 'url(' + topping.image + ')',
                  backgroundSize: "cover"
                };
                return (
                   <div key={i}className="order-selection-card" onClick={this.addTopping.bind(this, topping)}>
                     <div className="order-selection-card-top" style={divStyle}></div>
                      <div className="order-selection-card-bottom">
                         {topping.name}
                       </div>
                   </div>
                );
              }.bind(this))}
            </div>
         </div>
      );
   }
})

export default ToppingsView;
