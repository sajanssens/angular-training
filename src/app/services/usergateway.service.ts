import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../domain/user";
@Injectable({
  providedIn: 'root'
})
export class UserGateway {


  constructor(private http: HttpClient) { }

  get(): Observable<User[]> { return this.http.get<User[]>('http://localhost:3000/users'); }
  post(u: User): Observable<User> { return this.http.post<User>('http://localhost:3000/users', u); }
  delete(u: User): Observable<unknown> { return this.http.delete<User>(`http://localhost:3000/users/${u.id}`); }

}
