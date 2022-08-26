const Candy = require('./candy');

class Basket {
  constructor(){
    this.items = [];
    this.discount = 0;

  }
  addItem(item) {
    this.items.push(item)
  }


  applyDiscount(discount){
    this.discount = discount;

  }

  getTotalPrice(){
    let totalPrice = 0;

     this.items.map((item) => {
     totalPrice += item.getPrice();

     });
     return totalPrice - this.discount;
  }

}
const candy = new Candy('Mars', 4.99);
const basket = new Basket();

basket.addItem(candy);
basket.addItem(new Candy("chocolate", 5.99));
basket.addItem(new Candy("marshmallows", 1.99));

console.log(basket.applyDiscount(2));

console.log(candy.getName());
console.log(candy.getPrice());

console.log(basket.getTotalPrice());


module.exports = Basket;