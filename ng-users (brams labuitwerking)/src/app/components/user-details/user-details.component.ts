import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/domain/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private us: UserService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(map(params => params['id']))
      .subscribe(id => this.user$ = this.us.get(id));
  }

}


