import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from '../models/user';

@Injectable()
export class UserService {
  users: any[] = [];

  private userUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Users';
  constructor(private _http: HttpClient) { }
  getUsers(): Observable<any> {
    return this._http.get<User>(this.userUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getUser(Id: number): Observable<User> {
    return this.getUsers()
        .map((users: User[]) => users.find(p => p.Id === Id));
}

addUser(user:User)
{
    //console.log(user);
  return this._http.post<User>(this.userUrl, user);

}
updateUser(user:User)
{
  console.log(user);
  return this._http.put<User>(this.userUrl,user);
}


  private handleError(err: HttpErrorResponse){
    
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
