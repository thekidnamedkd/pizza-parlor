function PizzaPrice (size, sauce, toppings) {
  this.total = 0
  this.small = 19
  this.medium = 22
  this.large = 25
  this.oilSauce = 0
  this.redSauce = 1
  this.whiteSauce = 2
  this.addTop = 1

  if (this.size === "small") {
    total += small
  } else if (this.size === "medium") {
    total += medium
  } else if (this.size === "large") {
    total += large
  }
  if (this.sauce === "oilSauce") {
    total += oilSauce
  } else if (this.sauce === "redSauce") {
    total += redSauce
  } else if (this.sauce === "whiteSauce") {
    total += whiteSauce
  }
  // for addTop loop
  // (i=0; i<toppings; i++)

  return total
}

// $(document).ready(function() {
// event.preventDefault();
// })