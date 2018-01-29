import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  errorMessage: string;
  users: User[];
  newUser:any={};
  userForm:boolean=false;
  isNewForm:boolean;
  editUserForm:boolean=false;
  editedUser:any={};
  
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(res => { this.users = res;
      
    },
      error => this.errorMessage = <any>error);
  
    
  }

  showAddUserForm()
  {
    if(this.users.length)
    {
      this.newUser={};
    }
    this.userForm=true;
    this.isNewForm=true;
    
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
  console.log(user);
  }
  
  removeUser(Id:number)
  {
    
  this.userService.deleteUser(Id).subscribe(user=>{
    this.users = this.users.filter(h => h !== user);
    console.log(user);
  });
  }
  saveUser(user:User)
  {
    if(this.isNewForm)
    {
      this.users.push(user);
  this.userService.addUser(user)
      .subscribe(user => {
      
    
  });
  
    }
    
    this.userForm=false;
  }
  

}
