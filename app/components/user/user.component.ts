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
  isAdmin: Boolean;
  message: any;

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

  doStuff() {
    this.message = {
      name: this.name,
      wnum: this.wnum,
      password: this.password,
      isAdmin: this.isAdmin
    }
    this._dataService.addUser(this.message).subscribe();
    //.subscribe(res => res);
    console.log(this.message);
  }
}

class User {
  name: String;
  wnum: String;
  password: String;
  isAdmin: Boolean;
}