import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Array<any>;
  title: String;
  track: ['Resident', 'Commuter'];
  description: String;
  location: String;
  date: Date;
  time: String;
  message: any;
  Username: String;
  Password: String;

  constructor(private _dataService: DataService) {
    this._dataService.getEvents()
    .subscribe(res => this.events = res);
  }

  ngOnInit() {
  }

  authenticate()
  {
    var data = {
      email: this.Username,
      password: this.Password
    }
    JSON.stringify(data);
    this._dataService.authenticate(data).subscribe(res =>{
      console.log(res);
    });
  }

  createUser() {
    this.message = {
      title: this.title,
      track: this.track,
      description: this.description,
      location: this.location,
      date: this.date,
      time: this.time
    }
    this._dataService.addEvent(this.message).subscribe();
  }

  updateEvent(event) {
    if(this.title != ''){event.title = this.title;}
    if(this.description != ''){event.description = this.description;}
    if(this.location != ''){event.location = this.location;}
    if(this.time != ''){event.time = this.time;}
    event.track = this.track;
    event.date = this.date;
    this._dataService.updateEvent(event).subscribe();
  }
  
  /*getUser() {
    this.message =
    this._dataService.getUser().subscribe();
  }*/

  deleteUser(event) {
    this._dataService.deleteEvent(event).subscribe();
  }

}
