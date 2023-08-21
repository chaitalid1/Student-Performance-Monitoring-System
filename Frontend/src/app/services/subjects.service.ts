import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Subjects } from '../models/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private apiUrl = '/api/subject'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>('http://localhost:8080/api/subject/getAll');
  }

  getSubjectById(id: number): Observable<Subjects> {
    const url = `${'http://localhost:8080/api/subject'}/${id}`;
    return this.http.get<Subjects>(url);
  }

  // addSubject(subject: Subjects): Observable<Subjects> {
  //   return this.http.post<Subjects>('http://localhost:8080/api/subject/add', subject);
  // }

  updateSubject(id: number, subject: Subjects): Observable<Subjects> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Subjects>(url, subject);
  }

  deleteSubject(id: number): Observable<any> {
    const url = `${'http://localhost:8080/api/subject'}/${id}`;
    return this.http.delete<Subjects>(url);
  }

  createSubject(subject: Subjects): Observable<Subjects> {
    return this.http.post<Subjects>('http://localhost:8080/api/subject/add', subject);
  }
}
