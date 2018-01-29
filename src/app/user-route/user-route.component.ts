import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { RouteService } from '../services/route.service';
import { Route } from '../models/route';
import { Van } from '../models/van';
import { VanService } from '../services/van.service';
import { RouteOutlet } from '../models/routeOutlet';
import { RouteOutletService } from '../services/routeOutlet.service';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-route',
  templateUrl: './user-route.component.html',
  styleUrls: ['./user-route.component.css']
})
export class UserRouteComponent implements OnInit {
  errorMessage: string;
  users: User[];
  routes:Route[];
  vans:Van[];
  products:IProduct[];
  userRoutedata:any={ };
  constructor(private userService:UserService,private routeService:RouteService,private vanService:VanService,private routeOutletService:RouteOutletService,private productService:ProductService) { }

  ngOnInit() {
    this.userService.getUsers()
      
      
      .subscribe(res => { this.users = res;
        
      }),
        
    this.routeService.getRoutes() 
    .subscribe(res => { this.routes = res;
          
        }),
         
    
     this.vanService.getVans() 
      .subscribe(res => { this.vans = res;
               
          }),
      
    this.productService.getProducts() 
      .subscribe(res => { this.products = res;
                   
          }),      
            error => this.errorMessage = <any>error
  }
  
     post(){
              console.log(this.userRoutedata)
              this.routeOutletService.sendUserRoute(this.userRoutedata).subscribe(res => { 
               
                       },
              error => this.errorMessage = <any>error);
              
            }
          

}
