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
    private vanUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Van';
    constructor(private http: HttpClient) { }

    getVans(): Observable<any> {
        return this.http.get<Van>(this.vanUrl)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          
      }
      
}