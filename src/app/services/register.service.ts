import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from '../models/user';

@Injectable()
export class RegisterService {
    private userUrl= 'http://salesforcenew20180208102258.azurewebsites.net/api/Users';
    constructor(private http: HttpClient) { }

    sendUserRegistration(registerData:User):Observable<any>{
        return this.http.post(this.userUrl,registerData);
         
      }
    
      
}