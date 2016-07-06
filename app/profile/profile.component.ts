import { Component } from '@angular/core';
import { GitHubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId:module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent { 
    //this will be an observable so we must use these brackets
    user[];
    repos[];
    showUser:boolean;
    username:string;

    //dependency injection with constructor
    constructor(private _githubService:GitHubService){
        this.showUser = false;    
    }

    searchUser(){
        this._githubService.updateUser(this.username);
        
        this._githubService.getUser().subscribe(user=>{
            this.showUser = true;
            this.user = user;
            console.log(user);
        })

        this._githubService.getRepos().subscribe(repos=>{
            this.repos = repos;
            console.log(repos);
        })
        
        console.log(this.username);
    }

}