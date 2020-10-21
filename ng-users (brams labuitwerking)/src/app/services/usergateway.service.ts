import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../domain/user";
@Injectable({
  providedIn: 'root'
})
export class UserGateway {

  private readonly url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<User> { return this.http.get<User>(`${this.url}/${id}`); }
  getAll(): Observable<User[]> { return this.http.get<User[]>(this.url); }
  post(u: User): Observable<User> { return this.http.post<User>(this.url, u); }
  delete(u: User): Observable<unknown> { return this.http.delete(`${this.url}/${u.id}`); }

}
