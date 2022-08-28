const got = require('got')

const fetchJason = (response) => {
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
  };
  got('https://jsonplaceholder.typicode.com/todos').then(fetchJason);



 