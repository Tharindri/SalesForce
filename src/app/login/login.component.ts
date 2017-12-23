import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  errorMessage: string;
  loginData: any= { };
 constructor(private loginService: LoginService) {
  }


 post() {
   console.log(this.loginData);
   this.loginService.loginUser(this.loginData)
     .subscribe(res => {console.log(res);
     // todo return to home page
       if (res.status == 'Fail' || res.status == 'No Username'){
         alert('Invalid username or password');
       }
       else {
         alert('Successful');
       }
       },
         error => this.errorMessage = <any>error);
 }

}
