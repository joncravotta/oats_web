import React from 'react';

var MilkView = React.createClass({
  getInitialState: function() {
    return {
      orderState: 1,
      milks: [
    {
      "name": "Whole milk",
      "image": "http://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/642x361-2-Dairy_Milk-Almond_Milk_vs_Cow_Milk_vs_Soy_Milk_0.jpg",
      "price": 0.85
    },
    {
      "name": "Skim milk",
      "image": "http://images.agoramedia.com/everydayhealth/gcms/best-types-of-milk-for-cholesterol-04-pg-full.jpg",
      "price": 0.95
    },
    {
      "name": "Almond Milk",
      "image": "http://www.newsnish.com/wp-content/uploads/2015/08/almond-milk-140787908_81b93ec674f53ad2ef2e3e15351f61be.jpg",
      "price": 1.25
    },
    {
      "name": "Soy Milk",
      "image": "http://hiddensoy.com/WP/wp-content/uploads/2010/06/soymilk.jpg",
      "price": 1.25
    },
    {
      "name": "2% Milk",
      "image": "http://mylifemoves.com/wp-content/uploads/2016/06/A2-milk.jpg",
      "price": 0.75
    }
  ]
    };
  },
  updateOrderState: function(milk) {
    console.log("Milk " + milk.price)
    this.props.updateOrderPrice(milk.price);
    this.props.updateMilkState(milk.name);
    this.props.updateState(4);
  },
   render: function() {
      return (
         <div className="order-selection-container">
           <h1 className="order-selection-title">Pick your Milk</h1>
           <div className="primary-line"></div>
           <div className="order-selection-card-container">
              {this.state.milks.map(function(milk, i){
                var divStyle = {
                  backgroundImage: 'url(' + milk.image + ')',
                  backgroundSize: "cover"
                };
                return (
                   <div key={i}className="order-selection-card" onClick={this.updateOrderState.bind(this, milk)}>
                     <div className="order-selection-card-top" style={divStyle}></div>
                      <div className="order-selection-card-bottom">
                         {milk.name}<span>${milk.price}</span>
                       </div>
                   </div>
                );
              }.bind(this))}
            </div>
         </div>
      );
   }
})

export default MilkView;
