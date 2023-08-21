import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marks } from '../models/marks';
import { Student } from '../models/student';
import { Subjects } from '../models/subjects';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  private apiUrl = '/api/marks'; // Replace with your backend API URL
  subjects: Subjects[]= [];

  constructor(private http: HttpClient) { }

  saveMarks(marksData: any) {
    return this.http.post(this.apiUrl, marksData);
  }

  getMarks(): Observable<Marks[]>{
    return this.http.get<Marks[]>('http://localhost:8080/api/marks/getAll');
  }

  getMarksById(id: number): Observable<Marks[]>{  
    return this.http.get<Marks[]>(`${'http://localhost:8080/api/marks/students'}/${id}`);
  }

  fetchSubjects(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>('http://localhost:8080/api/subject/getSubjectNames');
  }



  // getStudents(): Observable<Student[]> {
  //   return this.http.get<Student[]>('http://localhost:8080/api/student/getAll');
  // }

}
