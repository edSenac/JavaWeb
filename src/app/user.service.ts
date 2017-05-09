import { Injectable } from '@angular/core';
import { User } from "app/user";

@Injectable()
export class UserService {

  users: User[] = [
  {
      name:"Fulano",
      email:"fulano@mail.com",
      username:"fulano"
  },
  {
      name:"Sicrano",
      email:"sicrano@mail.com",
      username:"sicrano"
  },
  {
      name:"Beltrano",
      email:"beltrano@mail.com",
      username:"beltrano"
  }];

  constructor() { 

  }

  getUsers(){
    console.log('users: ', this.users);
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }


}
