import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

  // register(data:any){
  //   return this.http.post("http://localhost:8080/", data);
  // }

  signUp(data:any){
    return this.http.post("http://localhost:8080/api/auth/add", data);
  }

  login(data:any){
    return this.http.post("http://localhost:8080/api/auth/login", data);
  }

  authenticate(username: string, password: string) {
    if (username == "admin" && password == "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      alert("Invalid Credentials");
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user == null))
    return !(user == null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }



}

