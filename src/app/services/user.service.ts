import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../domain/user';
import { UserGateway } from './usergateway.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<User[]>();

  // data: User[];

  constructor(private userGateway: UserGateway) {
    // this.data = this.users();
    // this.data = [
    //   { "id": 1, "name": "A" },
    //   { "id": 2, "name": "B" },
    //   { "id": 3, "name": "C" }
    // ];
  }

  // add(c: User) {
  //   this.data.push(c);
  // }

  // del(c) {
  //   console.log(c);

  //   this.data.splice(this.data.indexOf(c), 1);
  // }

  users(): Observable<User[]> {
    return this.userGateway.get();
    // return this.data;
  }
}
