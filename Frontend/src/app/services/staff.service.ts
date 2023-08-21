import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl = 'http://localhost:8080/api/staff';

  constructor(private http: HttpClient) { }

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>('http://localhost:8080/api/staff/getAll');
  }

  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>('http://localhost:8080/api/staff/add', staff);
  }

  updateStaff(id: number, staff: Staff): Observable<Staff> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Staff>(url, staff);
  }

  deleteStaff(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  createStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>('http://localhost:8080/api/staff/add', staff);
  }

  getStaffById(id: number): Observable<Staff> {
    const url = `${'http://localhost:8080/api/staff'}/${id}`;
    return this.http.get<Staff>(url);
  }
}
