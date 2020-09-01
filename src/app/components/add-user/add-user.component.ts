import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/domain/contact';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() add = new EventEmitter<Contact>();

  myFormGroup: FormGroup;
  name: string;

  constructor(private fb: FormBuilder) { // fb is injected
  }

  ngOnInit(): void {
    /* 
    this.myFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required])
    }); */

    // or shorter:
    this.myFormGroup = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onChange(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    const inVal = input.value;
    this.name = inVal;
  }

  handleAdd(e: InputEvent) {
    this.add.emit(this.myFormGroup.value); // delegate to parent using event
    this.myFormGroup.reset();
  }

}
