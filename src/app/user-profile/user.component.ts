import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../user';
import {UserProfileService} from './user-profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 private users: Array<any>;

 // private users: User[];

  constructor(private router: Router, private userService: UserProfileService) {

  }

  ngOnInit() {
    // this.userService.getAll().subscribe( (data) => {
    //   this.users = data.json()
    //   this.users = Array.of(this.users);
    // });
    this.userService.getUsers()
      .subscribe( (users) => {
        this.users = users;
        console.log(this.users);
      }, (error) => {
        console.log(error);
      });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }


}
