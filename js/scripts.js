function PizzaPrice (size, sauce, toppings) {
  this.total = 0
  this.small = 16
  this.medium = 19
  this.large = 22
  this.oilSauce = 0
  this.redSauce = 1
  this.whiteSauce = 2
  this.addVegTop = 1
  this.addMeatTop = 3

  if (this.size === "small") {
    this.total += small
  } else if (this.size === "medium") {
    this.total += medium
  } else if (this.size === "large") {
    this.total += large
  }
  if (this.sauce === "oil") {
    this.total += oilSauce
  } else if (this.sauce === "red") {
    this.total += redSauce
  } else if (this.sauce === "white") {
    this.total += whiteSauce
  }
  // for addTop loop
  // (i=0; i<toppings; i++)

  return total
}

// $(document).ready(function() {
// event.preventDefault();
// })