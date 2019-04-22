import { Component, OnInit } from '@angular/core';
import {Channel} from '../channel';
import { CHANNELS } from '../mock-channels';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels = CHANNELS;

  selectedChannel: Channel;

  constructor() { }

  ngOnInit() {
  }

  onSelect(channel: Channel): void {
    this.selectedChannel = channel;
  }

}
