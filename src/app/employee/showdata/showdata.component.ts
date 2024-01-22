import { Component, OnInit } from '@angular/core';
import { InsertdataserviceService } from '../../services/insertdataservice.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css'],
})
export class ShowdataComponent implements OnInit {
  users: any;
  constructor(private userdata: InsertdataserviceService) {
   
  }

  deleteEmployee(id: any) {
    this.userdata.deleteEmployee(id).subscribe((data) => {
      location.reload();
      console.log('data successfully deleted');
    });
  }
  ngOnInit(): void {
    console.log('user data');
    this.userdata.getAllEmployee().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
