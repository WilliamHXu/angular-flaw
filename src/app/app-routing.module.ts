import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ChannelsComponent} from './channels/channels.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user-profile/user.component';
import {AddUserComponent} from './user-profile/add-user.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'channels', component: ChannelsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'users', component: UserComponent },
  {path: 'add', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
