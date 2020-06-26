let pizza = new PizzaChoices

function PizzaChoices (size, sauce, toppings) {
  this.size = size
  this.sauce = sauce
  this.toppings = toppings
}

PizzaChoices.prototype.setPrice = function () {
  this.price = 0
  //size
  if (this.size === "small") {
    this.price += 16
  } else if (this.size === "medium") {
    this.price += 19
  } else if (this.size === "large")
    this.price += 22
  //sauce
  if (this.size === "oil") {
    this.price += 0
  } else if (this.size === "red") {
    this.price += 1
  } else if (this.size === "white") {
    this.price += 2
  }
  //toppings
  if (this.toppings === this.toppings){
    this.price += meatTop x 3
    this.price += vegTop x 1
  }
}


  return this.price


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

// // Here try making a new constructor. Ignore the one above, pretending that we have started this completely new. RIght now we want to just make a Pizza object constructor. Without thinking about all of the topping options we can have, or thinking about the sizes or anything like that--- let's think about what are the necessary components of a pizza to define it. Like size, sauce, toppings

// function Pizza (size, sauce, toppings) {
//   this.price = 0
//   this.size = size // Here we are expecting numbers for this.size and the other properties, because of how our prototype method has been defined.
//   this.sauce = sauce
//   this.toppings = toppings
// }

// let firstPizza = new Pizza

// Pizza.prototype.setPrice = function () {
//   this.price = this.size + this.sauce + this.toppings
// }

// // If we don't want our properties to be numerical values, but instead be strings, we could make an if statement block to handle it. 

// Pizza.prototype.setPriceIfStrings = function () {
//     // this.sauce = marinara
//     if (this.sauce === "marinara"){
//       this.price += 1
//     } else if (this.sauce === "something else") {
//       // some other logic that you may want to handle another string
//     }
// }

// // The way that we are constructing our pizza is expecting arguments, which (at the time of construction) should be defined. Like 'pizza = new Pizza('small', 'marinara', something for toppings). So we know that we have to wait for those to be defined to create an object. 
// // If we wanted to not provide arguments, we could later create a method to add those values -- but whichever you choose is up to you.
