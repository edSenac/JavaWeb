import { Component, OnInit } from '@angular/core';
import { User } from "app/user";
import { UserService } from "app/user.service";
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  users: User[];

  constructor(private service: UserService) {
  
  }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}