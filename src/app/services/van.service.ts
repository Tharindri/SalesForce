import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Van } from '../models/van';

@Injectable()
export class VanService {
    vans: any[] = [];
    private vanUrl= 'http://salesforcenew20180208102258.azurewebsites.net/api/Van';
    constructor(private http: HttpClient) { }

    getVans(): Observable<any> {
        return this.http.get<Van>(this.vanUrl)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          
      }
      

      addVan(van:Van)
      {
          console.log(van);
        return this.http.post<Van>(this.vanUrl, van);
      
      }
      
      updateVan(van:Van)
      {
        console.log(van);
        return this.http.put<Van>(this.vanUrl,van);
      }
      
      
        private handleError(err: HttpErrorResponse){
          
          console.log(err.message);
          return Observable.throw(err.message);
        }


    }