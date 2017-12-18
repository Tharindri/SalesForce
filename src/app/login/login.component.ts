import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  loginData:any={ };
  loading = false;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService)
{ }
post(){
    console.log(this.loginData)
    this.loading = true;
    this.authenticationService.loginUser(this.loginData.Username,this.loginData.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
                console.log(this.loginData+">>>>>>>>>>>>>>>>>>>>")
              },
            error => {
                this.alertService.error('Username or password is incorrect');
                this.loading = false;
                console.log(this.loginData+">>>>>>xbxcbx>>>>>>>>>>>>>>")
            });
   
  }
  
  ngOnInit() {
            // reset login status
            this.authenticationService.logout();
            
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
