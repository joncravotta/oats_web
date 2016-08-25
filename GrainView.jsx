import React from 'react';

var GrainView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      grains: [{"name": "Whole Grain", "image": "http://stayhealthyla.org/blog/uploads//2013/02/Whole-Wheat.jpg"}, {"name": "Grain", "image": "http://www.bakeryandsnacks.com/var/plain_site/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/niche-markets/milling-grains/oat-quality-gm-non-gm-coexistence-and-grain-differentiation-future/8644271-1-eng-GB/Oat-quality-GM-non-GM-coexistence-and-grain-differentiation-future_strict_xxl.jpg"}, {"name": "Quinoa", "image": "http://www.bbcgoodfood.com/sites/default/files/quinoa-man.jpg"}]
    };
  },
  updateOrderState: function() {
    this.props.updateState(3);
  },
   render: function() {
      return (
         <div className="order-selection-container">
           <h1 className="order-selection-title">Pick your grain</h1>
           <div className="order-selection-card-container">
              {this.state.grains.map(function(grain, i){
                var divStyle = {
                  backgroundImage: 'url(' + grain.image + ')',
                  backgroundSize: "cover"
                };
                return (
                   <div key={i}className="order-selection-card" onClick={this.updateOrderState}>
                     <div className="order-selection-card-top" style={divStyle}></div>
                      <div className="order-selection-card-bottom">
                         {grain.name}
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
