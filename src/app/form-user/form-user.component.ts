import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { User } from "app/user";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  user: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.user = new User();   
  }

   onSubmit(){
     this.service.addUser(this.user);
     this.user = new User();

   }
}


