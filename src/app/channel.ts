import {Message} from './message';
import {User} from './user';

export class Channel {
  id: number;
  name: string;
  messages: Message[];
  users: User[];
}
