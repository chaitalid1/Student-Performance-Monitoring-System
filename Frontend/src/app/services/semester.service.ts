import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semester } from '../models/semester';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private apiUrl = 'http://localhost:8080/api/semester';

  constructor(private http: HttpClient) { }

  getSemester(): Observable<Semester[]> {
    return this.http.get<Semester[]>('http://localhost:8080/api/semester/getAll');
  }

  addSemester(semester: Semester): Observable<Semester> {
    return this.http.post<Semester>('http://localhost:8080/api/semester/add', semester);
  }

  updateSemester(id: number, semester: Semester): Observable<Semester> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Semester>(url, semester);
  }

  deleteSemester(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  createSemester(semester: Semester): Observable<Semester> {
    return this.http.post<Semester>('http://localhost:8080/api/semester/add', semester);
  }

  getSemesterById(id: number): Observable<Semester> {
    const url = `${'http://localhost:8080/api/subject'}/${id}`;
    return this.http.get<Semester>(url);
  }
}
