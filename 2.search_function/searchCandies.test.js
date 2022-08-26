const searchCandies = require('./searchCandies');

describe('searchCandies', ()=>{
  it('returns candies start with Ma and are under 10 price range',() => {
    expect(searchCandies('Ma',10)).toEqual(['Mars', 'Maltesers']);

  });
it ('returns candies start with Ma and are under 2 price range', () =>{
  expect(searchCandies('Ma',2)).toEqual(['Mars']);
});

it('returns candies start with S and are under 10 price range',() => {
  expect(searchCandies('S',10)).toEqual(['Skitties', 'Skittles', 'Starburst']);

});

it('returns candies start with S and are under 4 price range',() => {
  expect(searchCandies('S',4)).toEqual(['Skitties', 'Skittles']);

});

});