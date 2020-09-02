import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: Contact[] = [
    { name: 'Sander' },
    { name: 'Bram' },
    { name: 'Ruben' },
    { name: 'Jochem' },
    { name: 'Jonas' },
    { name: 'Glenn' }
  ];

  add(c: Contact) {
    this.data.push(c);
  }

  users(): Contact[] {
    return this.data;
  }
}
