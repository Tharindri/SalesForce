import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
import { Route } from '../models/route';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  errorMessage: string;
  routes: Route[];
  editedRoute:any={};
  routeForm:boolean=false;
  editRouteForm:boolean=false;
  newRoute:any={};
  isNewForm:boolean;
  constructor(private routeService:RouteService) { }

  ngOnInit() {
    this.routeService.getRoutes()
    .subscribe(res => { this.routes = res;
      
    },
      error => this.errorMessage = <any>error);
  }
  showAddRouteForm()
  {
    if(this.routes.length)
    {
      this.newRoute={};
    }
    this.routeForm=true;
    this.isNewForm=true;
  }
  showEditRouteForm(route:Route)
  {
  if(!route){
    this.routeForm=false;
    return;
  }
  this.editRouteForm=true;
  //this.isNewForm=false;
  this.editedRoute=route;
  
  }
  
  
  saveRoute(route:Route)
  {
    if(this.isNewForm)
    {
      this.routes.push(route);
  this.routeService.addRoute(route)
      .subscribe(route => {
      
    
  });
  
    }
    
    this.routeForm=false;
  }
  


}
