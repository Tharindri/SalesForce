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
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(res => { this.users = res;
      
    },
      error => this.errorMessage = <any>error);
  }


  

}
