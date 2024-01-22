import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InsertdataserviceService {
  url = 'http://localhost:3000/employee/';

  constructor(private http: HttpClient) {}

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getAllEmployee() {
    return this.http.get(this.url);
  }

  insetEmployee(data: any) {
    return this.http.post(this.url, data);
  }

  deleteEmployee(id: any) {
    return this.http.delete(this.url + id);
  }

  updateEmployee(data: any, id: any) {
    return this.http.put(this.url + id, data);
  }

  getEmployeeById(id: any) {
    return this.http.get(this.url + id);
  }

  login(data: any) {
    return this.http.post<any>(this.url + 'login', data, {
      headers: { skip: 'true' },
    });
  }
}
