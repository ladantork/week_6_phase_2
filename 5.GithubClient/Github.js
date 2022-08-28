const GithubApi = require('./githubApi');

class Github{
    constructor(api){
        this.api = api
    }
    fetch(repo){
        this.repo;
        this.api.fetchRepositoryInfo(this.repo,(response)=>{
            this.result = (response);
        });
    };

    getRepoData() {
        return this.result
      };
};

module.exports = Github;

//const api = new GithubApi();
const github = new Github(new GithubApi);
github.fetch('sinatra/sinatra')
setTimeout(() => { console.log(github.getRepoData())}, 1000);