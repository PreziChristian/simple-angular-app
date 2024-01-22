import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { InsertdataserviceService } from '../../services/insertdataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css'],
})
export class UpdateDataComponent implements OnInit {
  employee: any;
  id: number = 0;
  updatevalue = new FormGroup({
    EmployeeName: new FormControl(''),
    EmployeeAge: new FormControl(''),
    EmployeeGender: new FormControl(''),
    EmployeeAddress: new FormControl(''),
    EmployeeSalary: new FormControl(''),
  });
  constructor(
    private userdata: InsertdataserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData() {
    this.userdata.getEmployeeById(this.id).subscribe((res) => {
      this.employee = res;
      this.updatevalue.patchValue(res);
    });
  }

  onUpdate() {
    this.userdata
      .updateEmployee(this.updatevalue.value, this.id)
      .subscribe((res) => {
        this.router.navigate(['/view']);
      });
  }
}
