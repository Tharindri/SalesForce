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
    currentUser:User;
    
    private userUrl= 'http://salesforcenew20180208102258.azurewebsites.net/api/Login';
    constructor(private http: HttpClient) { }

   
    loginUser(loginData: RegisteredUser): Observable<any> {

        return this.http.get<any>(this.userUrl + '?Username=' + loginData.Username + '&password=' + loginData.password)
          .do(response => JSON.stringify(response)
          
        
        )
          .catch(this.handleError);
          

           

          }

          getToken(){
            return localStorage.getItem('token');
            }        
          

        logout(): void {
            //this.currentUser = ;
        }
    private handleError(err: HttpErrorResponse){
      console.log('error in login');
      console.log(err.message);
      return Observable.throw(err.message);
    }
}
