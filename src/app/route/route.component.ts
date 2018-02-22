import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouteService } from '../services/route.service';
import { Route } from '../models/route';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Location } from './location';

import { MouseEvent } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-root-map',
  templateUrl: './app-root-map.component.html',
  styleUrls: [ './app-root-map.component.css' ]
})
export class RootMapComponent implements OnInit {

  locations: Location[];
  constructor( public dialogRef: MatDialogRef<RootMapComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any ){}

  ngOnInit() {
    this.locations = this.data.locations;
  }
  end: any;
  // google maps zoom level
  zoom: number = 14;
  
  // initial center position for the map
  lat: number = 6.796443;
  lng: number = 79.900668;

  clickedMarker(label: string, index: number) {
    //console.log(clicked the marker: ${label || index})
  }
  
  /*markers: marker[] = [
	  {
		  lat: 6.797128,
		  lng: 79.901893,
		  label: 'FIT',
		  draggable: false
	  },
	  {
		  lat: 6.795911,
		  lng: 79.887597,
		  label: 'KZONE',
		  draggable: false
	  },
	  {
		  lat: 6.82125,
		  lng: 79.891498,
		  label: 'Rathmalana Air Port',
		  draggable: false
	  }
  ]*/
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

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
  isShow:boolean=false;
  locations: Location[];
  constructor( private routeService:RouteService,
               public dialog: MatDialog ) { }

  ngOnInit() {
    this.routeService.getRoutes().subscribe(res => { 
        this.routes = res;
      },
      error => this.errorMessage = <any>error
    );

      if(localStorage.getItem('userType')==='Sales' || localStorage.getItem('userType')==='Admin' ){
        this.isShow=true; 
      }
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
        .subscribe(route => {});
    }
    this.routeForm=false;
  }
  updateRoute(route:Route){
    
    this.routeService.updateRoute(this.editedRoute).subscribe(route=>{
    
    });
    this.editRouteForm=false;
    this.editedRoute={};
    }
    
    removeRoute(Id:number)
    {
      
    this.routeService.deleteRoute(Id).subscribe(route=>{
      this.routes = this.routes.filter(h => h !== route);
      console.log(route);
    });
    }
    cancelEdits()
    {
      this.editedRoute={};
      this.editRouteForm=false;
    
    }
    
    

  showMap(id: number) 
  {
    this.routeService.getLocations(id).subscribe(data => {
      //console.log(data);
      this.locations = data;
      //console.log(this.locations);
      this.dialog.open(RootMapComponent, {
        data: { locations: this.locations },
        width: '800px'
      });
    },
    (error) => {console.log(error)}
    );
  }
}
