import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  users: any;
  showdatavalue = true;
  insertDataValue = false;
  token? = localStorage.getItem('token') || '';
  inputvariable = this.token;
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log("Token value",this.token)
    
  }
  getData(value: any) {
    this.token = value;
    location.reload();
  }

  logout() {
   
    localStorage.removeItem('token');
    this.token = undefined;
    this.router.navigate(['/login']);
  }
}
