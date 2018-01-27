import { Component } from '@angular/core';
import { PushNotificationService } from 'ng-push-notification';
@Component({
    
    templateUrl: './welcome.component.html',
    styleUrls:['./welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

    constructor()
    {

    }

   
    
}
