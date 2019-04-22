import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared-service/user.service';
import {Router} from '@angular/router';
import {User} from '../../user';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService, private rotuer: Router) { }

  ngOnInit() {
    this.user = this.userService.getter();
  }

  processForm() {
    if (this.user.userid === undefined) {
      this.userService.createUser(this.user).subscribe((user) => {
        console.log(user);
        this.rotuer.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.userService.updateUser(this.user).subscribe((user) => {
        console.log(user);
        this.rotuer.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  }


}
