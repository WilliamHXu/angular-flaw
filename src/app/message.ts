import {Channel} from './channel';
import {User} from './user';

export class Message {
  id : number;
  messageBody : string;
  user : User;
  channel : Channel;
}
