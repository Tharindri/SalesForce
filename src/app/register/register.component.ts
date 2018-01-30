import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent  {
  errorMessage: string;
 registerData:any={ };
 form;
 constructor(private registerService: RegisterService,private router: Router) {
  }


 post(){
   console.log(this.registerData)
   this.registerService.sendUserRegistration(this.registerData).subscribe(res => { 
    
            },
            error => this.errorMessage = <any>error);
 
            this.router.navigate(['/home']);       
 }


  
  ngOnInit() {
    
  }

}
