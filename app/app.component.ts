import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { GitHubService } from './services/github.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[ProfileComponent],
    providers:[GitHubService,HTTP_PROVIDERS]
})
export class AppComponent { }
