import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/domain/user';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users: User[];
  @Output() delete = new EventEmitter<User>();;

  constructor() { }

  ngOnInit(): void {
  }

  del(c: User) {
    this.delete.emit(c);
  }

}
