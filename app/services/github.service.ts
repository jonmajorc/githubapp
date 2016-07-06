//Injectable is for the service to be able to inject it into our component with Dependency Injection
import { Injectable } from '@angular/core';
/*
to make post/get requests 
http will return an observable which is like a promise where we are working with websockets and real-time data
there are different operators that we can use to manipulate the data
*/
 
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{
    private username:any; //Github username

    constructor(private _http:Http){
        this.username = ''; //my account
    }

    //get the account of the username
    getUser(){
        //this will be constantly available to whoever subscribes to it.
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res=>res.json());
    }
    //get the account repos of the username
    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res=>res.json());
    }
    //update username
    updateUser(username:string){
        this.username = username;
    }
}