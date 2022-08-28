const got = require('got')

const data = (response) =>{
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
}

 const fetchRepositoryInfo= (repo, callback)=>{

 got (`https://api.github.com/repos/${repo}`).then(callback)
 }

 fetchRepositoryInfo('sinatra/sinatra', data);


