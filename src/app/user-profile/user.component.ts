import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../user';
import {UserProfileService} from './user-profile.service';
import {bind} from '@angular/core/src/render3';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 private users: Array<any>;
private  user: User;
 // private users: User[];

  private us: User;

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
        console.log(this.users);
        // this.users = this.users.filter(u => u !== user);
      });
  }


  selectedUser(user: User) {
    this.userService.setUserName(user.username);
    this.userService.getUser(user)
      .subscribe( data => {
        // console.log(this.user);
        this.us = this.user;
      });
  }
}
