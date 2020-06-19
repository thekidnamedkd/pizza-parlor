function PizzaPrice () {
  this.total = 0
  this.small = 16
  this.medium = 19
  this.large = 22
  this.oilSauce = 0
  this.redSauce = 1
  this.whiteSauce = 2
  this.addVegTop = 1
  this.addMeatTop = 3

  if (document.forms[0].size[0].checked == true) {
    this.total += this.small
  } else if (document.forms[0].size[1].checked == true) {
    this.total += this.medium
  } else if (document.forms[0].size[2].checked === true) {
    this.total += this.large
  }

  console.log(this.total)

  if (document.forms[0].sauce[0].checked === "true") {
    this.total += this.small
  } else if (document.forms[0].sauce[1].checked === "true") {
    this.total += this.medium
  } else if (document.forms[0].sauce[2].checked === "true") {
    this.total += this.large
  }
  return PizzaPrice
}
  
  console.log(this.total)
//   if (this.sauce === "true") {
//     this.total += this.oilSauce
//   } else if (this.sauce === "true") {
//     this.total += this.redSauce
//   } else if (this.sauce === "true") {
//     this.total += this.whiteSauce
//   }
//   for (i=0; i<addTops; i++)
//     if()


//   return total
// }

// $(document).ready(function() {
// event.preventDefault();
// })