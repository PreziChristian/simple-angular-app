import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsertdataserviceService } from '../../services/insertdataservice.service';
import { error } from 'console';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  headers: any;

  @Input() token: any;
  @Output() myoutput: EventEmitter<String> = new EventEmitter();

  logindata = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private services: InsertdataserviceService,public router:Router) {}

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    this.services.login(this.logindata.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.myoutput.emit(this.token);
       
        this.router.navigate(['/home']);
      },
      (error) => console.log(error)
    );
  }
}
