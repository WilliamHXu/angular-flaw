import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChannelsComponent } from './channels/channels.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './messages/messages.component';
import { ChannelMessagesComponent } from './channel-messages/channel-messages.component';
import { UserProfileService} from './user-profile/user-profile.service';
import { UserComponent } from './user-profile/user.component';
import { AddUserComponent } from './user-profile/add-user.component';
import { HttpClientModule} from '@angular/common/http';
import { NewMessageBarComponent } from './new-message-bar/new-message-bar.component';
import {MessageService} from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    HomeComponent,
    UserProfileComponent,
    ChannelsComponent,
    AboutComponent,
    MessagesComponent,
    ChannelMessagesComponent,
    UserComponent,
    AddUserComponent,
    NewMessageBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserProfileService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
