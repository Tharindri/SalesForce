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
export class ExpenseService {
    private expenseUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Expenses';
    constructor(private http: HttpClient) { }

    getExpense():Observable<any>{
        return this.http.get(this.expenseUrl)
         .map(response=>response);
      //.catch(this.handleError);
        }
    
      private handleError(err: HttpErrorResponse){
       
        console.log(err.message);
        return Observable.throw(err.message);
      } 

      updateStatus(status:String,Id:number)
      {
       console.log(status,Id);
        return this.http.put('http://salesforcenew20180126044103.azurewebsites.net/api/Expenses/'+Id,{params:{status:status}});
      }

}