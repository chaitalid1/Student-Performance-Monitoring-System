import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from '../models/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:8080/api/attendance'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  getAllAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>('http://localhost:8080/api/attendance/getAll');
  }

  saveAttendance(attendanceData: any) {
    return this.http.post(this.apiUrl, attendanceData);
  }

  getTotalAttendanceCount(studentId: number, courseName: string): Observable<number> {
    const url = `${this.apiUrl}/total-count`;
    return this.http.get<number>(url,{ params: { studentId: studentId, courseName: courseName } });
  }

  getTotalPresentAttendanceCount(studentId: number, courseName: string): Observable<number> {
    const url = `${this.apiUrl}/present-count`;
    return this.http.get<number>(url,{ params: { studentId: studentId, courseName: courseName } });
  }

  getOverallAttendanceCount(studentId: number): Observable<number> {
    const url = `${this.apiUrl}/all-total-count`;
    return this.http.get<number>(url,{ params: { studentId: studentId} });
  }

  getOverallPresentAttendanceCount(studentId: number): Observable<number> {
    const url = `${this.apiUrl}/total-present-count`;
    return this.http.get<number>(url,{ params: { studentId: studentId} });
  }

  getAttendanceByStudentId(id: number): Observable<Attendance> {
    const url = `${'http://localhost:8080/api/attendance'}/${id}`;
    return this.http.get<Attendance>(url);
  }
}
