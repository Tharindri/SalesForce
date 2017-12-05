import {Component} from '@angular/core';
import { ProductService } from './services/product.service';
import { RegisterService } from './services/register.service';
@Component({
  selector: 'pm-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']


  ,
  providers:[ ProductService ,RegisterService]
  
})
export class AppComponent{
  pageTitle: string = 'SFA-Products';

}
