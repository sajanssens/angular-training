import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, startWith, switchMap } from 'rxjs/operators';
import { User } from '../domain/user';
import { UserGateway } from './usergateway.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  updateHappened$ = new Subject<undefined>();

  users$ = this.updateHappened$.pipe(
    startWith(undefined),
    switchMap(() => this.userGateway.getAll()),
    shareReplay(1) // caching
  );

  constructor(private userGateway: UserGateway) { }

  add(u: User) { this.userGateway.post(u).subscribe(this.triggerUpdate()) }
  del(u: User): void { this.userGateway.delete(u).subscribe(this.triggerUpdate()) }

  get(id: number): Observable<User> { return this.userGateway.get(id); }
  
  private triggerUpdate() { return () => this.updateHappened$.next(undefined); }  

}