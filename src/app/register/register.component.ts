import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent  {
  errorMessage: string;
 registerData:any={ };
 constructor(private registerService: RegisterService,private router: Router) {
  }


 post(){
   console.log(this.registerData)
   this.registerService.sendUserRegistration(this.registerData).subscribe(res => { 
    
            },
            error => this.errorMessage = <any>error);
 
            
 }


  
  ngOnInit() {
  }

}
