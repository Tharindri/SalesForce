import {Component} from '@angular/core';
import { ProductService } from './services/product.service';
import { RegisterService } from './services/register.service';

import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
@Component({
  selector: 'pm-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']


  ,
  providers:[ ProductService ,RegisterService,AuthenticationService,AlertService]
  
})
export class AppComponent{
  pageTitle: string = 'SFA-Products';

}
