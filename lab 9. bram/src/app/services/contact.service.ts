import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay, startWith, switchMap } from 'rxjs/operators';
import { Contact } from '../models/contact';


@Injectable({ providedIn: 'root' })
export class ContactService {

	private url = 'http://localhost:3000/contacts';

	contactsUpdated$ = new Subject<Contact[]>(); // subject is an observable (i.e. extends it), so anyone who's interested in it can listen to updates

	constructor(private http: HttpClient) { }

	getContacts() {
		// when GET returns, contactsUpdated "event" is fired with the contacts as content
		this.http.get<Contact[]>(this.url).subscribe(result => this.contactsUpdated$.next(result));		
	}

	add(c: Contact) {
		// when post returns, refresh contacts, which in turn fires contactsUpdated event
		this.http.post<Contact>(this.url, c).subscribe(() => this.getContacts());
	}

	delete(c: Contact) {
		this.http.delete<Contact>(this.url + "/" + c.id).subscribe(() => this.getContacts());				
	}

	update(c: Contact) {
		// this.http.put<Contact>(this.url + "/" + c.id, c).subscribe(() => this.getContacts());

		// or via alternative:
		this.http.put<Contact>(this.url + "/" + c.id, c).subscribe(this.triggerUpdate());
	}

	// alternative update mechanism, with caching: -----------------------------------------------------------

	private updateHappened$ = new Subject<Contact[]>(); // internal, private updateEvent, to trigger contacts$
	
	contacts$ = this.updateHappened$.pipe(
		startWith(undefined),
		switchMap(() => this.http.get<Contact[]>(this.url)),
		shareReplay(1) // caching
	);

	private triggerUpdate() { return () => this.updateHappened$.next(undefined); }
}
