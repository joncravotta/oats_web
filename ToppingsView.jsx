import React from 'react';
import SelectedToppingsBar from './SelectedToppingsBar.jsx';
var toppingsData = [
    {
      "name": "Blueberries",
      "price": 1.29,
      "image": "http://www.vegkitchen.com/wp-content/uploads/2012/12/Blueberries-on-white.jpg"
    },
    {
      "name": "Bananas",
      "price": 1.09,
      "image": "https://bigoven-res.cloudinary.com/image/upload/v1440783206/banana.jpg"
    },
    {
      "name": "Chia Seeds",
      "image": "http://img.foodnetwork.com/FOOD/2013/08/16/FN_chia-seeds-thinkstock_s4x3_lg.jpg",
      "price": 1.89
    },
    {
      "name": "Almond Butter",
      "price": 2.29,
      "image": "http://www.foodsafetynews.com/files/2014/08/Almond-butter_305x250.jpg"
    },
    {
      "name": "Strawberries",
      "price": 1.29,
      "image": "http://www.pollinator.ca/bestpractices/images/strawberry.jpg"
    },
    {
      "name": "Cacao Powder",
      "price": 1.79,
      "image": "http://d2118lkw40i39g.cloudfront.net/wp-content/uploads/2016/06/cacaoraw.jpg"
    },
    {
      "name": "Blackberries",
      "price": 1.29,
      "image": "http://growingandgathering.com/wp-content/uploads/2012/04/Blackberries.jpg"
    },
    {
      "name": "Peanut Butter",
      "price": 0.99,
      "image": "https://thomasbreads.com/files/vignettes/_0015_Peanut-butter-R.png"
    },
    {
      "name": "Chocolate Chips",
      "price": 0.99,
      "image": "http://www.tierrafarm.com/images/products/detail/DarkChocolateChips.jpg"
    },
    {
      "name": "Flax seeds",
      "price": 1.49,
      "image": "https://authoritynutrition.com/wp-content/uploads/2015/07/flaxseeds.jpg"
    },
    {
      "name": "Maple Syrup",
      "price": 0.99,
      "image": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivrSoI90dz_k/v1/-1x-1.jpg"
    },
    {
      "name": "Honey",
      "price": 0.99,
      "image": "http://cdn.greenmedinfo.com/sites/default/files/ckeditor/sayerji/images/healing_honey.jpg"
    }
  ];

var ToppingsView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      toppings: toppingsData,
      selectedToppings: []
    };
  },
  updateOrderState: function() {
    this.props.updateState(5);
  },
  addTopping: function(grain) {
    var newArray = this.state.selectedToppings;
    newArray.push(grain);
    this.props.addOrderPrice(grain.price);
    this.setState({selectedToppings: newArray});
  },
  removeTopping: function(index) {
    var newArray = this.state.selectedToppings;
    var grainPrice = newArray[index].price;
    newArray.splice(index, 1);
    this.props.subtractOrderPrice(grainPrice);
    this.setState({selectedToppings: newArray})
  },
   render: function() {
     console.log(this.state.selectedToppings);
      return (
         <div className="order-selection-container">
          <h1 className="order-selection-title">Pick your toppings</h1>
          <div className="primary-line"></div>
          <SelectedToppingsBar toppings={this.state.selectedToppings} removeTopping={this.removeTopping}/>
           <div className="order-selection-card-container">
              {this.state.toppings.map(function(topping, i){
                var divStyle = {
                  backgroundImage: 'url(' + topping.image + ')',
                  backgroundSize: "cover",
                  "borderRadius": "10"
                };
                return (
                   <div key={i}className="order-selection-card" onClick={this.addTopping.bind(this, topping)}>
                     <div className="order-selection-card-top" style={divStyle}></div>
                      <div className="order-selection-card-bottom">
                         {topping.name}<span>${topping.price}</span>
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
