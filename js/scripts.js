//object with all pizza properties which can be populated with user selections via getOrder to be priced out 
function PizzaOrder (size, sauce, vegTops, meatTops) {
  this.size = size;
  this.sauce = sauce;
  this.vegTops = vegTops;
  this.meatTops = meatTops;
}

//applies prices to the order - scalability is easy here with the ability to changes prices and add new menu categories with sub-options clearly and quickly
PizzaOrder.prototype.setPrice = function () {
  this.pizzaPrice = 0;
  //size
  if (this.size === "small") {
    this.pizzaPrice += 16;
  } else if (this.size === "medium") {
    this.pizzaPrice += 19;
  } else if (this.size === "large") {
    this.pizzaPrice += 22;
  }
  //sauce
  if (this.sauce === "oil") {
    this.pizzaPrice += 0
  } else if (this.sauce === "red") {
    this.pizzaPrice += 1
  } else if (this.sauce === "white") {
    this.pizzaPrice += 2
  }
  //toppings
  let meatTotal = this.meatTops.length * 3;
  let vegTotal = this.vegTops.length * 1;

  this.pizzaPrice += meatTotal + vegTotal

  return this.pizzaPrice
}

//getOrder reads selections and pushes to orderInput
function getOrder () {
  let size = $("input:radio[name='size']:checked").val();
  let sauce = $("input:radio[name='sauce']:checked").val();
  let meatTops = [];
  let vegTops = [];

//found better jquery modification for my checked box idea in first submission with loops
$("input:checkbox[name='meat']:checked").each(function() {
  let meatChecks = $(this).val();
  meatTops.push(meatChecks);
});

$("input:checkbox[name='veg']:checked").each(function() {
  let vegChecks = $(this).val();
  vegTops.push(vegChecks);
});
//pass selections through to get priced and return to user display
let pizzaOrder = new PizzaOrder (size, sauce, vegTops, meatTops);
pizzaOrder.setPrice ();
$("#sumPrice").text("$" + pizzaOrder.pizzaPrice);
}

//UI - click grabs order and assigns new object to a variable initiate order sequence
$(document).ready(function(){
  $("#pizzaMenu").submit(function(event){
    event.preventDefault();
    getOrder ();
  });
});