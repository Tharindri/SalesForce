import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { error } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  errorMessage: string;
  loginData: any= { };
  isLoggedIn : boolean;
  userId: string;
  userType: string;
  isAdmin:boolean;
  isSales:boolean;
  isFinance:boolean;
  isHR:boolean;


 constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
  }


 post() {
   this.isLoggedIn=false;
   console.log(this.loginData);
   this.loginService.loginUser(this.loginData).subscribe(res => {
    console.log(res);
    if(res.status=='Success'){
      console.log('success');
      this.userId = res.Id;
     
      if(res.UserType === 'Admin')
        this.userType = 'Admin';
      else if(res.UserType === 'Finance')
        this.userType = 'Finance';
      else if(res.UserType === 'HR')
        this.userType = 'HR';
      else if(res.UserType === 'Sales')
        this.userType = 'Sales';
      
      console.log(this.userId,this.userType);
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('userId',this.userId);
      localStorage.setItem('userType',this.userType);
      console.log(localStorage.getItem('isLoggedIn'));
      this.router.navigate(['/home']);
}
else{
    alert('Invalid username or password');
    console.log('failed');
}

   },
  (error) => {
    console.log('Error');
  });
      //if(res.length === 1) {
        //if(res[0].)
//console.log(res);

        
      //}
     
      /* if (res.status == 'Fail' || res.status == 'No Username'){
         alert('Invalid username or password');
         this.router.navigate(['/register']);
       }
       else {
        this.isLoggedIn = true;
         localStorage.setItem('currentUser',JSON.stringify({res}));
         alert('Successful');

        
         
         if(res.UserType=='SalesRep')
         {
          this.router.navigate(['/products']);
         
         }
         else if(res.UserType=='Admin')
         {
         this.router.navigate(['/register']);
         }
       }
       },
         error => this.errorMessage = <any>error);
 
        }*/
      }
logOut()
{
  
  localStorage.removeItem('currentUser');
  this.isLoggedIn=false;
  this.router.navigate(['/login']);
}
}
