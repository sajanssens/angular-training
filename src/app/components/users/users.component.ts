import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/domain/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];
  @Output() delete = new EventEmitter<User>();;

  constructor() { }

  ngOnInit(): void {
  }

  del(c: User) {
    this.delete.emit(c);
  }

}
