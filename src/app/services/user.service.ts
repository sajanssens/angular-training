import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  users(): Contact[] {
    return [
      { name: 'Sander' },
      { name: 'Bram' },
      { name: 'Ruben' },
      { name: 'Jochem' },
      { name: 'Jonas' },
      { name: 'Glenn' }
    ];
  }
}
