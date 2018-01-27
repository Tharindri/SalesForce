import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { RouteOutlet } from '../models/routeOutlet';

@Injectable()
export class NotificationService {
    private notificationUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Leave';
    constructor(private http: HttpClient) { }

    getNotification():Observable<any>{
        return this.http.get(this.notificationUrl)
         .map(response=>response);
      //.catch(this.handleError);
        }
    
      private handleError(err: HttpErrorResponse){
        console.log('error prd');
        console.log(err.message);
        return Observable.throw(err.message);
      } 

      updateStatus(status:String,Id:number)
      {
       console.log(status,Id);
        return this.http.put('http://salesforcenew20180126044103.azurewebsites.net/api/Leave/'+Id,{params:{status:status}});
      }

}