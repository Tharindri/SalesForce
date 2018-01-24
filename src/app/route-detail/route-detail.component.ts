import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { RouteService } from '../services/route.service';
import { Route } from '../models/route';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {
  route:Route;
  editedRoute:any={};
  routeForm:boolean=false;
  editRouteForm:boolean=false;
  constructor(private _route:ActivatedRoute, private router:Router,private routeService:RouteService) { 
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const param=+this._route.snapshot.paramMap.get('id');
    if(param){
      const id=+param;
      this.getRoute(id);
  }
  }
  getRoute(id:number)
  {
  this.routeService.getRoute(id).subscribe(
    res=>this.route=res,
    
  );
    
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
  updateRoute(route:Route){
    
    this.routeService.updateRoute(this.editedRoute).subscribe(route=>{
    
    });
    this.editRouteForm=false;
    this.editedRoute={};
    
  
  }
  onBack() :void
  {
    this.router.navigate(['/routes']);
  }
  


  }
