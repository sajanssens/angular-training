import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from './domain/user';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Users';
  color = 'red';
  show = false;
  name: string;
  postalcode: string;
  filter: string;
  searchControl: FormControl;
  users: Observable<User[]>;
  filteredUsers: User[];

  constructor(private fb: FormBuilder, private us: UserService) { // fb, us are injected   
    this.searchControl = this.fb.control('');
    this.searchControl.valueChanges.subscribe(newFilter => this.doFiltering(newFilter));    
    this.users = this.us.users();
    // this.filteredUsers = [...this.users];
  }


  flip() { this.show = !this.show; }

  doFiltering(value: string) {
    this.filter = value;
    // this.filteredUsers = this.users.filter(u => u.name.indexOf(value) >= 0);
  }

  addMe(c: User) {
    // this.us.add(c);
    // this.filteredUsers = [...this.users];
  }

  delMe(c: User) {    
    // this.us.del(c);
    // this.filteredUsers = [...this.users];
  }

}