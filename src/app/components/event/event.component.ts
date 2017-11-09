import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;
  title: String;
  /*track: ['Resident', 'Commuter'];
  description: String;
  location: String;
  date: Date;
  time: String;*/
  wnum: String; 
  event: any;
  message: any; 

  constructor(
    private route: ActivatedRoute,
    private _dataService: DataService) {
      this._dataService.getEvents()
      .subscribe(res => this.events = res);

      this.title = this.route.snapshot.paramMap.get('title');
      console.log(this.title);

      this.message = {
        title: this.title
      }
      this._dataService.getEvent(this.message)
      .subscribe(res => this.event = res);
  }

  ngOnInit(){
    
  }

  addAttendee()
  {
    this.message = {
      wnum: this.wnum,
      title: this.title
    }
    JSON.stringify(this.message);
    this._dataService.addAttendee(this.message).subscribe(res => {console.log(res)});
  }

  /*createEvent() {
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
  
  addAttendee(event) {
    this.message = {
      event: event,
      wnum: this.wnum
    }
    console.log(this.message);
    this._dataService.addAttendee(this.message).subscribe();
  }

  deleteUser(event) {
    this._dataService.deleteEvent(event).subscribe(res =>{
      console.log(res)});
  } */

}

export class event {
  public title: String;
  public track: ['Resident', 'Commuter'];
  public description: String;
  public location: String;
  public date: Date;
  public time: String;
}
