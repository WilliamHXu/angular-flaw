import { Component, OnInit } from '@angular/core';
import {Channel} from '../channel';
import {ChannelService} from '../channel.service';

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

  onSelect(channel: Channel): void {
    this.selectedChannel = channel;
  }

}
