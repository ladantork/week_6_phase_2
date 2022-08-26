const multiply = require('./multiply');

describe ('multiply', ()=> {

    it('returns 9',()=>{
        expect(multiply(3, 3)).toBe(9);
    });


});