import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/department';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:8080/api/department/getAll');
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>('http://localhost:8080/api/department/add', department);
  }

  updateDepartment(deptId: number, department: Department): Observable<Department> {
    const url = `${'http://localhost:8080/api/department'}/${deptId}`;
    return this.http.put<Department>(url, department);
  }

  deleteDepartment(id: number): Observable<any> {
    const url = `${'http://localhost:8080/api/department'}/${id}`;
    return this.http.delete(url);
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>('http://localhost:8080/api/department/add', department);
  }

  getDepartmentById(id: number){
    return this.http.get<Department[]>('http://localhost:8080/api/department/'+id);
  }

  
}
