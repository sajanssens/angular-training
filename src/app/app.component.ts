import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  color = 'red';
  show = true;
  name: string;
  filter: string;
  myFormGroup: FormGroup;
  searchControl: FormControl;

  readonly users = [
    'Sander',
    'Bram',
    'Ruben',
    'Jochem',
    'Jonas',
    'Glenn'
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

  save() {
    console.log(this.myFormGroup.value);
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
    this.filteredUsers = this.users.filter(name => name.indexOf(value) >= 0);
  }

}