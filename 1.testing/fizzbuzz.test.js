const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz',() => {
it('returns FizzBuzz',()=>{
 expect(fizzBuzz(15)).toBe('FizzBuzz');

});

it ('returns Fizz',()=>{
  expect(fizzBuzz(3)).toBe('Fizz');

});

it('returns Buzz',()=>{
  expect(fizzBuzz(5)).toBe('Buzz');

});

it('returns a number if it is not multiple 15,3,5',()=>{
  expect(fizzBuzz(8)).toBe(8);
});


});