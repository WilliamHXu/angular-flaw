import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../user-profile/user-profile.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {


  subsription: Subscription;
  userName: string;
  constructor(private userProfileService: UserProfileService) {
    this.subsription = this.userProfileService.userChanged.subscribe(
      userName => this.userName = userName
    );
  }

  ngOnInit() {
  }

}
