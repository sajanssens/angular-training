import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { User } from 'src/app/domain/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  updateHappened$ = new Subject<undefined>();
  
  user$: Observable<User> = this.updateHappened$.pipe(
    startWith(undefined),
    switchMap(() => this.us.get(8)),
    shareReplay(1)
  );

  id: number = 0;
  name: string = 'x';



  constructor(private route: ActivatedRoute, private us: UserService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(map(params => params['id']))
      // .subscribe(id => this.us.get(id).subscribe(u => this.user = u));
      .subscribe(id => this.user$ = this.us.get(id));
    
    // not working: try with updateHappened...
    this.user$.pipe(map(u => this.id = u.id));
    this.user$.pipe(map(u => this.name = u.name));
  }

}
