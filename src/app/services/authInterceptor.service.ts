import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.get('token')}`
              }
            
        });
        return next.handle(request);
    }
}