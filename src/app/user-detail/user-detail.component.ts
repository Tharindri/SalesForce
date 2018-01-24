import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({

  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User;
  editedUser:any={};
  userForm:boolean=false;
  editUserForm:boolean=false;

  constructor(private route:ActivatedRoute, private router:Router,private userService:UserService) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    const param=+this.route.snapshot.paramMap.get('id');
  if(param){
    const id=+param;
    this.getUser(id);
  }
  }
getUser(id:number)
{
this.userService.getUser(id).subscribe(
  res=>this.user=res,
  
);
  
}
showEditUserForm(user:User)
{
if(!user){
  this.userForm=false;
  return;
}
this.editUserForm=true;
//this.isNewForm=false;
this.editedUser=user;

}
updateUser(user:User){
  
  this.userService.updateUser(this.editedUser).subscribe(user=>{
  
  });
  this.editUserForm=false;
  this.editedUser={};
  

}
onBack() :void
{
  this.router.navigate(['/users']);
}
}
