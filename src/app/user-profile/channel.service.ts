import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Channel} from 'src/app/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private channelsUrl = 'http://localhost:8080/channel';

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.channelsUrl);
  }

  getChannel(channelId: number): Observable<Channel> {
    const url = '${this.channelsUrl}/${channelId}';
    return this.http.get<Channel>(url);
  }

  createChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(this.channelsUrl, channel, this.httpOptions);
  }

  updateChannel(channel: Channel): Observable<Channel> {
    return this.http.put<Channel>(this.channelsUrl, channel, this.httpOptions);
  }

  deleteChannel(channel: Channel | number): Observable<Channel> {
    const id = typeof channel === 'number' ? channel : channel.id;
    const url = '${this.channelsUrl}/${id}';
    return this.http.delete<Channel>(url, this.httpOptions);
  }
}
