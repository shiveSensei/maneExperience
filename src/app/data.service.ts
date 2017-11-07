import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private http: Http) { }
  
  // authenticate(data)
  // {
  //   return this.http.post("/api/users/authenticate", data)
  //   .map(result => this.result = result.json())
  // }

  authenticate(data)
  {
    return this.http.post("/api/users/authenticate", data);
  }

//------------- User CRUD calls
  getUsers(){
    return this.http.get("/api/users")
    .map(result => this.result = result.json());
  }

  getUser(){
    return this.http.get("/api/user")
    .map(result => this.result = result.json());
  }

  addUser(newUser){
    console.log('reached dataService');
    return this.http.post("/api/addUser", newUser)
    .map(res => res.json().data);
  }

  updateUser(user){
    return this.http.put("/api/updateUser", user)
    .map(res => res.json().data);
  }
  
  deleteUser(user){
    return this.http.post("/api/deleteUser", user)
    .map(res => res.json().data);
  }

//------------- Event CRUD calls
  getEvents(){
    return this.http.get("/api/users")
    .map(result => this.result = result.json().data);
  }

  getEvent(){
    return this.http.get("/api/user")
    .map(result => this.result = result.json().data);
  }

  addEvent(newUser){
    return this.http.post("/api/addUser", newUser)
    .map(res => res.json().data);
  }

  updateEvent(user){
    return this.http.put("/api/updateEvent", event)
    .map(res => res.json().data);
  }
  
  deleteEvent(event){
    return this.http.post("/api/deleteEvent", event)
    .map(res => res.json().data);
  }
}
