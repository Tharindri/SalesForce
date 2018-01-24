import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
import { Route } from '../models/route';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  errorMessage: string;
  routes: Route[];
  constructor(private routeService:RouteService) { }

  ngOnInit() {
    this.routeService.getRoutes()
    .subscribe(res => { this.routes = res;
      
    },
      error => this.errorMessage = <any>error);
  }


}
