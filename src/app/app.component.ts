import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  myFormGroup: FormGroup;
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
    /* this.myFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required])
    }); */

    // or shorter:
    this.myFormGroup = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.searchControl = this.fb.control('');
    this.searchControl.valueChanges.subscribe(newFilter => {
      this.doFiltering(newFilter);
    });
  }

  add() {
    // console.log(this.myFormGroup.value);    
    // console.log(this.postalcode);
    this.users.push(this.myFormGroup.value);
    this.filteredUsers.push(this.myFormGroup.value);
    this.myFormGroup.reset();
  }

  flip() {
    this.show = !this.show;
  }

  onChange(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    const inVal = input.value;
    this.name = inVal;
  }

  doFiltering(value: string) {
    this.filter = value;
    this.filteredUsers = this.users.filter(u => u.name.indexOf(value) >= 0);
  }

}