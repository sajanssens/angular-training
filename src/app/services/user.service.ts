import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../domain/user';
import { UserGateway } from './usergateway.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userSubject = new Subject<User[]>();

  constructor(private userGateway: UserGateway) { }

  users(): Observable<User[]> { return this.userGateway.getAll(); }
  get(id: number): Observable<User> { return this.userGateway.get(id); }
  add(u: User) { this.userGateway.post(u).subscribe(u => console.log('User added:', u)); }
  del(u: User) { this.userGateway.delete(u).subscribe(u => console.log('User deleted:', u)); }

}