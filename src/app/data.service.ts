import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { event } from './components/event/event.component';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;
  constructor(private http: Http) { }

//------------- Login Authentication
  authenticate(data)
  {
    return this.http.post("/api/users/authenticate", data);
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
    return this.http.post("/api/users/updateUser", user)
    .map(res => res.json());
  }
  
  deleteUser(user){
    return this.http.post("/api/users/deleteUser", user)
    .map(res => res.json());
  }

//------------- Event CRUD calls
  getEvents(){
    return this.http.get("/api/events/getAll")
    .map(result => this.result = result.json());
  }

  getEvent(title){
    console.log(title);
    return this.http.post("/api/events/event", title)
    .map(result => this.result = result.json());
  }

  addEvent(newEvent){
    return this.http.post("/api/events/addEvent", newEvent)
    .map(res => res.json());
  }

  updateEvent(event){
    return this.http.put("/api/events/updateEvent", event)
    .map(res => res.json());
  }
  
  deleteEvent(event){
    return this.http.post("/api/events/removeEvent", event)
    .map(res => res.json());
  }

  addAttendee(data){
    console.log(data);
    return this.http.put("/api/events/addAttendee", data)
  }
}
