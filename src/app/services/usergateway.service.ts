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

}
