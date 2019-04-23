import { Component, OnInit } from '@angular/core';
import {Channel} from '../channel';
import {ChannelService} from '../channel.service';
import {User} from '../user';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels: Channel[];

  private channelService: ChannelService;

  selectedChannel: Channel;

  constructor(channelService: ChannelService) {
    this.channelService = channelService;
  }

  ngOnInit() {
    this.channelService.getChannels()
      .subscribe((response) => {
        this.channels = response;
      });
  }

  add(name: string): void {
    // const newChannel = new Channel();
    // const newUser = new User();
    // newChannel.users = new Array(newUser);
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

}
