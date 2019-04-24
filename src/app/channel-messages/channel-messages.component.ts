import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message';
import {Channel} from '../channel';
import {MessageService} from '../message.service';
import {User} from '../user';
import * as Stomp from 'stompjs';
import {$} from 'jquery';
@Component({
  selector: 'app-channel-messages',
  templateUrl: './channel-messages.component.html',
  styleUrls: ['./channel-messages.component.css']
})
export class ChannelMessagesComponent implements OnInit {

  private _channel: Channel;
  private _user: User;
  private messages: Message[];
  private stompClient;
  private serverUrl;
  private receiveUrl;


  constructor(private messageService: MessageService) {}


  get channel(): Channel {
    return this._channel;
  }

  @Input()
  set channel(channel: Channel) {
    this._channel = channel;
    this.getMessagesInChannel();
  }

  get user(): User {
    return this._user;
  }

  @Input()
  set user(user: User) {
    this._user = user;
  }

  ngOnInit() {
    this.initializeWebSocketConnection();
  }

  getMessagesInChannel(): void {
    this.messageService.getMessagesByChannel(this._channel)
      .subscribe(messages => this.messages = messages);
  }

  initializeWebSocketConnection() {
    this.serverUrl = 'ws://localhost:8080/chat';
    this.receiveUrl = '/receive/reply';
    let ws = new WebSocket(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function() {
      that.stompClient.subscribe('/receive/reply', (message) => {
        if (message.messageBody) {
          $('.messages').append('<li> <span class="badge">{{message.user.username}}</span> {{message.messageBody}} </li>');
          console.log(message.messageBody);
        }
      });
    });
  }

}
