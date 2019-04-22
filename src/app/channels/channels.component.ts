import { Component, OnInit } from '@angular/core';
import {Channel} from '../channel';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels: Channel[];

  constructor() { }

  ngOnInit() {
  }

}
