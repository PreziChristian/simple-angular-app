import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  users: any;
  showdatavalue = true;
  insertDataValue = false;
  token? = localStorage.getItem('token') || '';
  inputvariable = this.token;
  constructor() {}

  
  getData(value: any) {
    this.token = value;
    location.reload();
  }
}
