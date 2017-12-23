import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from '../models/product';


@Injectable()
export class ProductService {
  products: any[] = [];

  private _productUrl= 'http://salesforcenew20171220054329.azurewebsites.net/api/Product';
  constructor(private _http: HttpClient) { }
  getProducts(): Observable<any> {
    return this._http.get<IProduct>(this._productUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  addProduct(product:IProduct)
  {
    console.log(product);
    return this._http.post<IProduct>(this._productUrl, product);

  }

  updateProduct(product:IProduct)
  {
    console.log(product);
    return this._http.put<IProduct>(this._productUrl,product);
  }



  private handleError(err: HttpErrorResponse){
    console.log('error prd');
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
