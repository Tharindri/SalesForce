import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from '../models/user';

@Injectable()
export class LoginService {
    private userUrl= 'http://salesforcenew20171220054329.azurewebsites.net/swagger/ui/index#!/Login/Login_GetByUsernameAndPassword';
    constructor(private http: HttpClient) { }

    loginUser(loginData:User){
        
        return this.http.post<any>(this.userUrl,loginData).subscribe(
            response=>response.json()
        )
           // .do(data => console.log('All: ' + JSON.stringify(data)))
        }
        
         
      }
    
      
}
