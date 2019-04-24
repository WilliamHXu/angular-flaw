import { Component, OnInit } from '@angular/core';
import {Channel} from '../channel';
import {ChannelService} from '../channel.service';
import {User} from '../user';
import {UserProfileService} from '../user-profile/user-profile.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels: Channel[];

  users: User[];

  private channelService: ChannelService;

  private userProfileService: UserProfileService;

  selectedChannel: Channel;

  selectedUser: User;

  constructor(channelService: ChannelService) {
    this.channelService = channelService;
  }

  ngOnInit() {
    this.channelService.getChannels()
      .subscribe((response) => {
        this.channels = response;
      });
  }

  ngOnInitUsers() {
    this.userProfileService.getUsers()
      .subscribe((response) => {
        this.users = response;
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.channelService.createChannel({ name } as Channel)
      .subscribe(channel => {
        this.channels.push(channel);
      });
  }

  delete(channel: Channel): void {
    this.channels = this.channels.filter(c => c !== channel);
    this.channelService.deleteChannel(channel).subscribe();
  }

  onSelect(channel: Channel): void {
    this.selectedChannel = channel;
  }

  onSelectUser(user: User): void {
    this.selectedUser = user;
  }

}
