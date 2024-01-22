import { Component, OnInit } from '@angular/core';
import {

  FormControl,
  FormGroup,
} from '@angular/forms';
import { InsertdataserviceService } from '../../services/insertdataservice.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css'],
})
export class InsertdataComponent implements OnInit {
  insertvalue = new FormGroup({
    EmployeeName: new FormControl(''),
    EmployeeAge: new FormControl(''),
    EmployeeGender: new FormControl(''),
    EmployeeAddress: new FormControl(''),
    EmployeeSalary: new FormControl(''),
  });
  constructor(
    private employeedata: InsertdataserviceService,
    private router: Router
  ) {}

  onSubmit() {
    console.log('--', this.insertvalue.value);
    this.employeedata.insetEmployee(this.insertvalue.value).subscribe(
      (data) => console.log('success', data),
      (error) => console.log(error)
    );
    this.router.navigate(['/view']);
  }

  ngOnInit(): void {}
}
