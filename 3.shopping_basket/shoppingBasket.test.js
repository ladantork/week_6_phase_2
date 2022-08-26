const Basket = require('./shoppingBasket');
const Candy = require('./candy.js');

jest.mock('./candy.js');

describe('shoppingBasket', () => {
  beforeEach(() => {
    Candy.mockClear();
  });
    describe ('.addItem', ()=>{
      it('adds item to the basket',()=>{
        const basket = new Basket();
        const double = { getName: () => 'Mars', getPrice: () => 4.99 };
        basket.addItem(double);
        expect(basket.getTotalPrice()).toEqual(4.99);
       });
    });
    
    describe ('.applyDiscount', ()=>{
        it('adds 2 items to the basket',()=>{
          const basket = new Basket();
          const double = {getName: ()=> 'Mars', getPrice:()=>4.99};
          const double_one = {getName: ()=> 'Snickers', getPrice:()=>5.99};
          basket.addItem(double);
          basket.addItem(double_one);
          expect(basket.getTotalPrice()).toEqual(10.98);
  
         });
      });
    
      describe ('.applyDiscount', ()=>{
        it('adds 2 items to the basket and apply discount',()=>{
          const basket = new Basket();
          const double = {getName: ()=> 'Mars', getPrice:()=>4.99};
          const double_one = {getName: ()=> 'Snickers', getPrice:()=>5.99};
          basket.addItem(double);
          basket.addItem(double_one);
          basket.applyDiscount(2);
          expect(basket.getTotalPrice()).toEqual(8.98);
  
         });
      });
    

});
    