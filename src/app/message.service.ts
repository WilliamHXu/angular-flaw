import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from './message';
import {Channel} from './channel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private messagesUrl = 'http://localhost:8080/messages';
  private channelsUrl = 'http://localhost:8080/channels';

  constructor(private http: HttpClient) { }

  getMessagesByChannel(channel: Channel | number): Observable<Message[]> {
    const channelId = typeof channel === 'number' ? channel : channel.id;
    const url = `${this.channelsUrl}/${channelId}/messages`;
    return this.http.get<Message[]>(url);
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl);
  }

  getMessage(messageId: number): Observable<Message> {
    const url = `${this.messagesUrl}/${messageId}`;
    return this.http.get<Message>(url);
  }

  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.messagesUrl, message, this.httpOptions);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(this.messagesUrl, message, this.httpOptions);
  }

  deleteMessage(message: Message | number): Observable<Message> {
    const id = typeof message === 'number' ? message : message.id;
    const url = `${this.messagesUrl}/${id}`;
    return this.http.delete<Message>(url, this.httpOptions);
  }
}
