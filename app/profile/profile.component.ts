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
    //dependency injection with constructor
    constructor(private _githubService:GitHubService){
        this._githubService.getUser().subscribe(user=>{
            this.user = user;
            console.log(user);
        })
    }
    
}