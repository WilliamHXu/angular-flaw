import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../user';

import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private  http: HttpClient) { }

  private userUrl = 'http://localhost:8080/users/';
  // private userUrl = '/api';

  // public getUsers() {
  //   return this.http.get<{UsersList: User[]}>(this.userUrl);
  // }

  // getAll(): Observable<any> {
  //   return this.http.get(this.userUrl);
  // }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
  public deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
