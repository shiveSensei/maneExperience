import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wnum: String;
  password: String;

  constructor(private _dataService: DataService) {
  }

  authenticate()
  {
    var data = {
      wnum: this.wnum,
      password: this.password
    }
    JSON.stringify(data);
    this._dataService.authenticate(data).subscribe(res =>{
      console.log(res);
    });
  }
}
