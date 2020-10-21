import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.css']
})
export class InvitePage implements OnInit {
  contacts: Contact[];
  inviteForm: FormGroup;

  nrOfPossibleDates = 3;
  nrOfPossibleDatesArray = Array(this.nrOfPossibleDates); // *ngFor only accepts collections. See http://stackoverflow.com/a/40822960/888093 for a much better solution

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService) { }

  ngOnInit(): void {
    // retrieve the contacts    
    this.contactService.getContacts();

    // update the checkboxes
    this.contactService.contactsUpdated$.subscribe(contacts => {
      this.contacts = contacts;

      // set up the contacts portion of the form
      let formContacts = <FormArray>this.inviteForm.get('contacts');
      for (let c of contacts) {
        formContacts.push(this.fb.group({
          id: [c.id, Validators.required],
          selected: [false]
        }));
      }
    });

    // set up the dynamic dates portion of the form
    let dates = [];
    // let dates = <FormArray>this.inviteForm.get('dates');
    for (let i = 0; i < this.nrOfPossibleDates; i++) {
      dates.push(this.fb.group({
        date: ['', Validators.required]
      }));
    }

    this.inviteForm = this.fb.group({
      event: ['', [Validators.required]],
      dates: this.fb.array(dates),
      contacts: this.fb.array([]) // intially [], then contacts are filled when they're retrieved
    });

  }

  save() {
    console.log(this.inviteForm.value);
    this.inviteForm.reset();
  }

}
