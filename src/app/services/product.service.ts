import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpHeaders } from '@angular/common/http';

import { IProduct } from '../models/product';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};

@Injectable()
export class ProductService {
  products: any[] = [];
  
  private _productUrl= 'http://salesforcenew20180126044103.azurewebsites.net/api/Product';
  constructor(private _http: HttpClient) { }

// get token(){
//   return localStorage.getItem('token');
// }

  getProducts(): Observable<any> {
    
    return this._http.get<any>(this._productUrl,httpOptions)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  addProduct(product:IProduct)
  {
    console.log(product);
    return this._http.post<IProduct>(this._productUrl, product, httpOptions);

  }

  updateProduct(product:IProduct)
  {
    console.log(product);
    return this._http.put<IProduct>(this._productUrl,product,httpOptions);
  }
  deleteProduct(Id:number)
  {
    
    return this._http.delete('http://salesforcenew20180126044103.azurewebsites.net/api/Product/'+Id,httpOptions);
  }


  private handleError(err: HttpErrorResponse){
    console.log('error prd');
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
