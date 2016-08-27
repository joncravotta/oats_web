import React from 'react';

var GrainView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      grains: [
    {
      "name": "Whole Grain",
      "image": "http://stayhealthyla.org/blog/uploads//2013/02/Whole-Wheat.jpg",
      "price": 2.55
    },
    {
      "name": "Grain",
      "image": "http://www.bakeryandsnacks.com/var/plain_site/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/niche-markets/milling-grains/oat-quality-gm-non-gm-coexistence-and-grain-differentiation-future/8644271-1-eng-GB/Oat-quality-GM-non-GM-coexistence-and-grain-differentiation-future_strict_xxl.jpg",
      "price": 2.55
    },
    {
      "name": "Quinoa",
      "image": "http://www.bbcgoodfood.com/sites/default/files/quinoa-man.jpg",
      "price": 3.25
    }
  ]
    };
  },
  updateOrderState: function(grain) {
    console.log("grain " + grain.price)
    this.props.updateOrderPrice(grain.price);
    this.props.updateState(3);
  },
   render: function() {
      return (
         <div className="order-selection-container">
           <h1 className="order-selection-title">Pick your grain</h1>
           <div className="primary-line"></div>
           <div className="order-selection-card-container">
              {this.state.grains.map(function(grain, i){
                var divStyle = {
                  backgroundImage: 'url(' + grain.image + ')',
                  backgroundSize: "cover"
                };
                return (
                   <div key={i}className="order-selection-card" onClick={this.updateOrderState.bind(this, grain)}>
                     <div className="order-selection-card-top" style={divStyle}></div>
                      <div className="order-selection-card-bottom">
                         {grain.name}<span>${grain.price}</span>
                       </div>
                   </div>
                );
              }.bind(this))}
            </div>
         </div>
      );
   }
})

export default GrainView;
