import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = '/api/student'; // Replace with your backend API URL

  private data!: Student;

  setData(data: Student) {
    this.data = data;
  }

  getData(): Student {
    return this.data;
  }

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/api/student/getAll');
  }

  getStudentsByFirstName(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/api/student/sorted-by-marks');
  }

  getStudentsByUSNNo(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/api/student/sorted-by-usnno');
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8080/api/student/add', student);
  }

  getStudentById(id: number): Observable<Student> {
    const url = `${'http://localhost:8080/api/student'}/${id}`;
    return this.http.get<Student>(url);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    const url = `${'http://localhost:8080/api/student'}/${id}`;
    return this.http.put<Student>(url, student);
  }

  deleteStudent(id: number): Observable<any> {
    const url = `${'http://localhost:8080/api/student'}/${id}`;
    return this.http.delete<Student>(url);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8080/api/student/add', student);
  }

}
