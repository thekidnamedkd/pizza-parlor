//object which can be populated and pulled from via getOrder
function PizzaOrder () {
}

//takes selections and saves them as order to be priced out - scalability is easy here with the ability to changes prices and add new menu categories with sub-options clearly and quickly
PizzaOrder.prototype.orderInput = function (size, sauce, vegTops, meatTops) {
  this.size = size;
  this.sauce = sauce;
  this.vegTops = vegTops;
  this.meatTops = meatTops;
}

//applies prices to the order - this part was fairly easy to improve from previous business logic after thinking about it differently and incoroporating jquery
PizzaOrder.prototype.setPrice = function () {
  this.pizzaPrice = 0;
  console.log(this.pizzaPrice)
  //size
  if (this.size === "small") {
    this.pizzaPrice += 16;
  } else if (this.size === "medium") {
    this.pizzaPrice += 19;
  } else if (this.size === "large") {
    this.pizzaPrice += 22;
  }
  console.log(this.pizzaPrice)
  //sauce
  if (this.sauce === "oil") {
    this.pizzaPrice += 0
  } else if (this.sauce === "red") {
    this.pizzaPrice += 1
  } else if (this.sauce === "white") {
    this.pizzaPrice += 2
  }
  console.log(this.pizzaPrice)
  //toppings
  let meatTotal = this.meatTops.length * 3;
  let vegTotal = this.vegTops.length * 1;

  this.pizzaPrice += meatTotal + vegTotal
  console.log(this.pizzaPrice)

  return this.pizzaPrice
}

//getOrder reads selections and pushes to orderInput
function getOrder () {
  let size = $("input:radio[name='size']:checked").val();
  let sauce = $("input:radio[name='sauce']:checked").val();
  let meatTops = [];
  let vegTops = [];

  console.log(size)
  console.log(sauce)
  console.log(meatTops)
  console.log(vegTops)

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
pizzaOrder.orderInput (size, sauce, vegTops, meatTops);
pizzaOrder.setPrice ();
$("#sumPrice").text("$" + pizzaOrder.pizzaPrice);
}

//UI - click grabs order and assigns new object to a variable initiate order sequence
let pizzaOrder = new PizzaOrder();
$(document).ready(function(){
  $("#pizzaMenu").submit(function(event){
  event.preventDefault();
    getOrder ();
  });
});

// function PizzaPrice () {
//   this.total = 0;
//   this.small = 16;
//   this.medium = 19;
//   this.large = 22;
//   this.oilSauce = 0;
//   this.redSauce = 1;
//   this.whiteSauce = 2;
//   this.addMeat = 3;
//   this.addVeg = 1;

//   if (document.forms[0].size[0].checked == true) {
//     this.total += this.small;
//   } else if (document.forms[0].size[1].checked == true) {
//     this.total += this.medium;
//   } else if (document.forms[0].size[2].checked === true) {
//     this.total += this.large;
//   }

//   console.log(this.total)

//   if (document.forms[0].sauce[0].checked === true) {
//     this.total += this.oilSauce;
//   } else if (document.forms[0].sauce[1].checked === true) {
//     this.total += this.redSauce;
//   } else if (document.forms[0].sauce[2].checked === true) {
//     this.total += this.whiteSauce;
//   }
//   console.log(this.total);
  
//   for (i=0; i<3; i++) {
//     if (document.forms[0].meat[i].checked === true) {
//       this.total += this.addMeat;
//     }
//   }
//   console.log(this.total);
//   for (i=0; i<7; i++) {
//     if (document.forms[0].veg[i].checked === true) {
//       this.total += this.addVeg;
//     }
//   }
//   console.log(this.total)
//   return PizzaPrice
// }

// function Total () {
//   document.getElementById("sumPrice").innerHTML= "$" + this.total 
// }

// function Clear () {
//   document.getElementById("sumPrice").innerHTML= "$0" 
// }

// // Here try making a new constructor. Ignore the one above, pretending that we have started this completely new. Right now we want to just make a Pizza object constructor. Without thinking about all of the topping options we can have, or thinking about the sizes or anything like that--- let's think about what are the necessary components of a pizza to define it. Like size, sauce, toppings

// function Pizza (size, sauce, toppings) {
//   this.pizzaPrice = 0
//   this.size = size // Here we are expecting numbers for this.size and the other properties, because of how our prototype method has been defined.
//   this.sauce = sauce
//   this.toppings = toppings
// }

// let firstPizza = new Pizza

// Pizza.prototype.setPrice = function () {
//   this.pizzaPrice = this.size + this.sauce + this.toppings
// }

// // If we don't want our properties to be numerical values, but instead be strings, we could make an if statement block to handle it. 

// Pizza.prototype.setPriceIfStrings = function () {
//     // this.sauce = marinara
//     if (this.sauce === "marinara"){
//       this.pizzaPrice += 1
//     } else if (this.sauce === "something else") {
//       // some other logic that you may want to handle another string
//     }
// }

// // The way that we are constructing our pizza is expecting arguments, which (at the time of construction) should be defined. Like 'pizza = new Pizza('small', 'marinara', something for toppings). So we know that we have to wait for those to be defined to create an object. 
// // If we wanted to not provide arguments, we could later create a method to add those values -- but whichever you choose is up to you.
