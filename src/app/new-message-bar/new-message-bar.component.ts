import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../channel';
import {MessageService} from '../message.service';
import {Message} from '../message';
import {User} from '../user';
import Stomp from 'stompjs';
import {$} from 'jquery';
import {UserProfileService} from '../user-profile/user-profile.service';


@Component({
  selector: 'app-new-message-bar',
  templateUrl: './new-message-bar.component.html',
  styleUrls: ['./new-message-bar.component.css']
})
export class NewMessageBarComponent implements OnInit {

  @Input() channel: Channel;
  @Input() user: User;
  private stompClient;
  private serverUrl;
  private receiveUrl;


  constructor(private messageService: MessageService, private userService: UserProfileService) { }

  ngOnInit() {
    this.initializeWebSocketConnection();
    this.setProxyUser();
  }

  sendMessageToChannel(messageText: string): void {
    const message = new Message();
    message.messageBody = messageText;
    message.channel = this.channel;
    message.user = this.user;
    this.messageService.createMessage(message);
    const users = this.userService.getUsers();
    this.user = users[0];
    let jsonString = JSON.stringify({
      'messageBody': message.messageBody,
      'user': this.user,
      'channel': message.channel
    });
    this.stompClient.send('/app/messages/', {}, jsonString);
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

  private setProxyUser() {
    const users = this.userService.getUsers();
    this.user = users[0];
  }
}
