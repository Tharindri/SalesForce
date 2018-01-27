import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Outlet } from '../models/outlet';


@Injectable()
export class OutletService {
  outlets: any[] ;

  private OutletUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Outlets';
  constructor(private _http: HttpClient) { }
  getOutlets(): Observable<any> {
    return this._http.get<Outlet>(this.OutletUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  addOutlet(outlet:Outlet)
  {
    console.log(outlet);
    return this._http.post<Outlet>(this.OutletUrl, outlet);

  }

  updateOutlet(Id:number,outlet:Outlet)
  {
    console.log(outlet);
    return this._http.put('http://salesforcenew20180126044103.azurewebsites.net/api/Outlets/'+Id,this.outlets);
  }

  deleteOutlet(Id:number,outlet:Outlet)
  {
    console.log(outlet);
    return this._http.delete('http://salesforcenew20180126044103.azurewebsites.net/api/Outlets/'+Id);
  }
  private handleError(err: HttpErrorResponse){
    console.log('error in outlet service');
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
