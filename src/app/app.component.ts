import {Component} from '@angular/core';
import { ProductService } from './services/product.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { OutletService } from './services/outlet.service';
@Component({
  selector: 'pm-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']


  ,
  providers:[ ProductService ,RegisterService,LoginService,OutletService]
  
})
export class AppComponent{
  pageTitle: string = 'SFA-Products';

}
