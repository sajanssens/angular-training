import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
	contacts: Contact[]; // when using contact[] in html
	contacts$: Observable<Contact[]>; // when using async pipe in html instead of subscribing here in the component

	constructor(private contactService: ContactService) { }

	ngOnInit() {
		this.contactService.contactsUpdated$.subscribe(contacts => this.contacts = contacts);		
		this.contactService.getContacts();
				
		this.contacts$ = this.contactService.contactsUpdated$;
		// this.contacts$ = this.contactService.contacts$; // alternative, cached variant
	}

	edit(contact: Contact) {
		contact.editing = true;
	}

	save(contact: Contact) {
		contact.editing = false;
		this.contactService.update(contact);
	}

	delete(contact: Contact) {		
		this.contactService.delete(contact);
	}
}