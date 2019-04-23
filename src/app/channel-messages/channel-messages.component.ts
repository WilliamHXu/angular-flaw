import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message';
import {Channel} from '../channel';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-channel-messages',
  templateUrl: './channel-messages.component.html',
  styleUrls: ['./channel-messages.component.css']
})
export class ChannelMessagesComponent implements OnInit {

  private _channel: Channel;
  private messages: Message[];


  constructor(private messageService: MessageService) {}


  get channel(): Channel {
    return this._channel;
  }

  @Input()
  set channel(channel: Channel) {
    this._channel = channel;
    this.getMessagesInChannel();
  }

  ngOnInit() {
  }

  getMessagesInChannel(): void {
    this.messageService.getMessagesByChannel(this.channel)
      .subscribe(messages => this.messages = messages);
  }

}
