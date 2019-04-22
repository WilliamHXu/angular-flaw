import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../channel';
import {MessageService} from '../message.service';
import {Message} from '../message';
import {User} from '../user';

@Component({
  selector: 'app-new-message-bar',
  templateUrl: './new-message-bar.component.html',
  styleUrls: ['./new-message-bar.component.css']
})
export class NewMessageBarComponent implements OnInit {

  @Input() channel: Channel;
  @Input() user: User;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessageToChannel(messageText: string): void {
    const message = new Message();
    message.messageBody = messageText;
    message.channel = this.channel;
    message.user = this.user;
    this.messageService.createMessage(message);
  }

}
