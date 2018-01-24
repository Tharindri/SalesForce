import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from '../models/user';
import {RegisteredUser} from '../models/registereduser';

@Injectable()
export class LoginService {
    private userUrl= 'http://salesforcenew20180122090327.azurewebsites.net/api/Login';
    constructor(private http: HttpClient) { }

    loginUser(loginData: RegisteredUser): Observable<any> {

        return this.http.get<any>(this.userUrl + '?Username=' + loginData.Username + '&password=' + loginData.password)
          .do(response => JSON.stringify(response)
        
        )
          .catch(this.handleError);
           // .do(data => console.log('All: ' + JSON.stringify(data)))
          //localStorage.setItem('token',response.json().token);
    
          }

    private handleError(err: HttpErrorResponse){
      console.log('error in login');
      console.log(err.message);
      return Observable.throw(err.message);
    }
}
