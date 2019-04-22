import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserProfileService} from './user-profile.service';
import {User} from '../user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();

  constructor(private  router: Router, private userService: UserProfileService) { }


  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe( data => {
        alert('User created successfully.');
      });

  }


  ngOnInit() {
  }

}
