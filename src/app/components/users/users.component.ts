import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/domain/contact';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: Contact[];  

  constructor() { }

  ngOnInit(): void {
  }

}
