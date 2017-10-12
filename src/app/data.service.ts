import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private http: Http) { }

//------------- Login Authentication
  verifyLogin(username, password){
    return this.http.post("/api/users/authenticate", username, password)
    .map(result => this.result = result.json());
  }

//------------- User CRUD calls
  getUsers(){
    return this.http.get("/api/users/getAll")
    .map(result => this.result = result.json());
  }

  getUser(){
    return this.http.get("/api/users/getUser")
    .map(result => this.result = result.json());
  }

  addUser(newUser){
    return this.http.post("/api/users/addUser", newUser)
    .map(res => res.json());
  }

  updateUser(user){
    return this.http.put("/api/users/updateUser", user)
    .map(res => res.json());
  }
  
  deleteUser(user){
    return this.http.post("/api/users/deleteUser", user)
    .map(res => res.json());
  }

//------------- Event CRUD calls
  getEvents(){
    return this.http.get("/api/events/getAll")
    .map(result => this.result = result.json().data);
  }

  getEvent(){
    return this.http.get("/api/events")   //no function for this operation
    .map(result => this.result = result.json().data);
  }

  addEvent(newUser){
    return this.http.post("/api/events/addEvent", newUser)
    .map(res => res.json().data);
  }

  updateEvent(user){
    return this.http.put("/api/events/updateEvent", event)
    .map(res => res.json().data);
  }
  
  deleteEvent(event){
    return this.http.post("/api/events/removeEvent", event)
    .map(res => res.json().data);
  }
}
