const Candy = require('./candy')

describe('Candy', ()=>{
    const candy = new Candy('Mars', 4.99);

  describe('.getName ', ()=>{
    it('returns candy name',()=>{

      expect(candy.getName()).toEqual('Mars');

    });
  });

  describe('.getPrice ', ()=>{
    it('returns candy price',()=>{
  
      expect(candy.getPrice()).toEqual(4.99);
  
    });
  });

});