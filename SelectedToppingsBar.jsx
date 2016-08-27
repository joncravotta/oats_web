import React from 'react';

// var  mn = $(".selected-toppings-container");
// var mns = "sticky";
//
// $(window).scroll(function() {
//   if( $(window).scrollTop() > $(".selected-toppings-container").offset().top ) {
//     $(".selected-toppings-container").addClass(mns);
//   } else {
//     $(".selected-toppings-container").removeClass(mns);
//   }
// });


var SelectedToppingsBar = React.createClass({
  removeTopping: function(topping) {
    console.log(topping);
    this.props.removeTopping(topping);
  },
  componentDidUpdate: function() {
    $('.selected-toppings-container').scrollLeft($('.selected-toppings-container').get()[0].scrollWidth);
    console.log($(".selected-toppings-container").get()[0].scrollWidth);
    console.log("called");
  },
   render: function() {
      return (
         <div className="selected-toppings-container">
          {this.props.toppings.map(function(topping, i){
            var divStyle = {
              backgroundImage: 'url(' + topping.image + ')',
              backgroundSize: "cover"
            };
            return (
              <div className="selected-toppings-card" style={divStyle} key={i}>
                {topping.name}
                <span className="selected-toppings-remove" onClick={this.removeTopping.bind(this, i)}>╳</span>
              </div>
            );
          }.bind(this))}
         </div>
      );
   }
})

export default SelectedToppingsBar;
