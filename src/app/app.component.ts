import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Contact } from './domain/contact';


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

  users: Contact[] = [
    { name: 'Sander' },
    { name: 'Bram' },
    { name: 'Ruben' },
    { name: 'Jochem' },
    { name: 'Jonas' },
    { name: 'Glenn' }
  ];

  filteredUsers = [...this.users];

  constructor(private fb: FormBuilder) { // fb is injected   
    this.searchControl = this.fb.control('');
    this.searchControl.valueChanges.subscribe(newFilter => {
      this.doFiltering(newFilter);
    });
  }



  flip() {
    this.show = !this.show;
  }


  doFiltering(value: string) {
    this.filter = value;
    this.filteredUsers = this.users.filter(u => u.name.indexOf(value) >= 0);
  }

  addMe(c: Contact) {
    this.users.push(c);
    this.filteredUsers = [...this.users];
  }

}