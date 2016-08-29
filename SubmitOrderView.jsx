import React from 'react';

var SubmitOrderView = React.createClass({
  getInitialState: function() {
    return {
      location:"",
      toppingsVisible: false
    };
  },
  updateOrderState: function() {
    this.props.updateState(6);
  },
  toggleToppings: function() {
    if (this.state.toppingsVisible == false) {
      $('.submit-order-cell-toppings-container').css( "display", "flex" );
      this.setState({toppingsVisible: true});
    } else {
      $('.submit-order-cell-toppings-container').hide();
      this.setState({toppingsVisible: false});
    }
  },
  toppingsLength: function() {
    var arr = this.props.toppings;
    console.log("arr: " + arr.length);
    return arr.length;
  },
   render: function() {
      return (
         <div className="order-selection-container">
           <h1 className="order-selection-title">Submit Your Order</h1>
           <div className="primary-line"></div>
           <div className="submit-order-container">
              <div className="submit-order-card">

                <div className="submit-order-card-row">
                  <div className="submit-order-card-cell-left">Pickup location</div>
                  <div className="submit-order-card-cell-right">{this.props.location}</div>
                </div>

                <div className="submit-order-card-row">
                  <div className="submit-order-card-cell-left">Oat</div>
                  <div className="submit-order-card-cell-right">{this.props.oat}</div>
                </div>

                <div className="submit-order-card-row">
                  <div className="submit-order-card-cell-left">Milk</div>
                  <div className="submit-order-card-cell-right">{this.props.milk}</div>
                </div>

                <div className="submit-order-card-row-toppings-container" onClick={this.toggleToppings}>
                  <div className="submit-order-card-row">
                    <div className="submit-order-card-cell-left">Toppings</div>
                    <div className="submit-order-card-cell-right"><span className="submit-order-card-cell-dropdown">+</span></div>
                  </div>
                  <div className="submit-order-cell-toppings-container">
                    {this.props.toppings.map(function(topping, i){
                      var divStyle = {
                        backgroundImage: 'url(' + topping.image + ')',
                        backgroundSize: "cover"
                      };
                      return (
                        <div className="selected-toppings-card" style={divStyle} key={i}>
                          {topping.name}
                        </div>
                      );
                    }.bind(this))}
                  </div>
                </div>

                <div className="submit-order-card-row">
                  <div className="submit-order-card-cell-left">Total price</div>
                  <div className="submit-order-card-cell-right">$11.35</div>
                </div>

                <div className="submit-order-card-row-button">
                  Submit Order
                </div>
              </div>
            </div>
         </div>
      );
   }
})

export default SubmitOrderView;
