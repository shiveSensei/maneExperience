import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { event } from '../event/event.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any;

  constructor(private _dataService: DataService) {
    this._dataService.getEvents()
    .subscribe(res => this.events = res);
    console.log(this.events);
  }

  ngOnInit() {
  }
}
