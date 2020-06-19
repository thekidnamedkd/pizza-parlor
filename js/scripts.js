function Pizza (size, sauce, toppings) {
  this.size = size
  this.sauce = sauce
  this.toppings = toppings
}

Pizza.prototype.price = function() {
  this.price = 16
  if (this.size === "small") {
    this.price += 3
  } else if (this.size === "medium") {
    this.price += 6
  } else if (this.size === "large") {
    this.price += 9
  }
}

// let size
// let sauce
// let toppings
// let pizza

// $(document).ready(function() {
// event.preventDefault();
// })