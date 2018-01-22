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
 
 constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
  }


 post() {
   console.log(this.loginData);
   this.loginService.loginUser(this.loginData)
     .subscribe(res => {console.log(res);

      //localStorage.setItem('token',res.json().token);
      
     // todo return to home page
       if (res.status == 'Fail' || res.status == 'No Username'){
         alert('Invalid username or password');
         this.router.navigate(['/register']);
       }
       else {
         alert('Successful');
         if(res.UserType=='SalesRep')
         {this.router.navigate(['/products']);
         this.router.navigate(['/outlet']);
         }
         else if(res.UserType=='Admin')

         this.router.navigate(['/register']);

       }
       },
         error => this.errorMessage = <any>error);
 }

}
