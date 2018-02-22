import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { RouteOutlet } from '../models/routeOutlet';

@Injectable()
export class RouteOutletService {
    private userRouteUrl= 'http://salesforcenew20180208102258.azurewebsites.net/api/RoutesOutlets';
    constructor(private http: HttpClient) { }

sendUserRoute(userRoutedata:RouteOutlet):Observable<any>{
        return this.http.post(this.userRouteUrl,userRoutedata);
         
      }
    
   
}