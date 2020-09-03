import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/domain/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  title = 'Users';
  color = 'red';
  show = false;
  name: string;
  postalcode: string;
  filter: string;
  searchControl: FormControl;
  users$: Observable<User[]>;
  filteredUsers$: Observable<User[]>;

  constructor(private fb: FormBuilder, private us: UserService) { // fb, us are injected   
    this.searchControl = this.fb.control('');
    // this.searchControl.valueChanges.subscribe(newFilter => this.doFiltering(newFilter));    
    this.users$ = this.us.users();
    this.filteredUsers$ = combineLatest(this.searchControl.valueChanges, this.users$).pipe(
      map(([myFilter, users]) => {
        return this.doFiltering(users, myFilter);
      })
    );
  }

  flip() { this.show = !this.show; }

  doFiltering(users: User[], value: string) {
    return users.filter(u => u.name.indexOf(value) >= 0);
  }

  addMe(u: User) {
    this.us.add(u);
  }

  delMe(c: User) {
    this.us.del(c);
    // this.filteredUsers = [...this.users];
  }


}
