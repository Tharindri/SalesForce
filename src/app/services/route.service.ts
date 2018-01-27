import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Route } from '../models/route';

@Injectable()
export class RouteService {
  routes: any[] = [];

  private routeUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Route';
  constructor(private http: HttpClient) { }
  getRoutes(): Observable<any> {
    return this.http.get<Route>(this.routeUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getRoute(Id: number): Observable<Route> {
    return this.getRoutes()
        .map((routes: Route[]) => routes.find(p => p.Id === Id));
}

addRoute(route:Route)
{
    console.log(route);
  return this.http.post<Route>(this.routeUrl, route);

}

updateRoute(route:Route)
{
  console.log(route);
  return this.http.put<Route>(this.routeUrl,route);
}


  private handleError(err: HttpErrorResponse){
    
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
