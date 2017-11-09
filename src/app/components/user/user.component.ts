import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<any>;
  name: String;
  wnum: String;
  password: String;
  email: String;
  isAdmin: Boolean;
  message: any;

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  ngOnInit() {
    this.isAdmin=false;
  }

  //Need to not use active instance of "this"
  createUser() {
    this.message = {
      name: this.name,
      wnum: this.wnum,
      password: this.password,
      email: this.email,
      isAdmin: this.isAdmin
    }
    this._dataService.addUser(this.message).subscribe();
  }

  //Need to not use active instance of "this"
  updateUser(user) {
    this.message = {
      user: user,
      newPw: this.password
    }
    this._dataService.updateUser(this.message).subscribe();
  }
  
  getUser() {
    this.message =
    this._dataService.getUser().subscribe();
  }

  deleteUser(user) {
    console.log(user.name);
    this._dataService.deleteUser(user).subscribe();
  }
}