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
    this.isAdmin=false;
  }

  createUser() {
    this.message = {
      name: this.name,
      wnum: this.wnum,
      password: this.password,
      isAdmin: this.isAdmin
    }
    this._dataService.addUser(this.message).subscribe();
  }

  updateUser(user) {
    if(this.name != ''){user.name = this.name;}
    if(this.wnum != ''){user.wnum = this.wnum;}
    if(this.password != ''){user.password = this.password;}
    user.isAdmin = this.isAdmin;
    this._dataService.updateUser(user).subscribe();
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