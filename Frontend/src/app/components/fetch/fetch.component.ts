import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  isLoggedIn = false;

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  
  myfield = "";
  authService: any;

  constructor(private auth: AuthService, private router: Router){}

  login(){
    this.auth.login(this.loginForm.value).subscribe(success =>{
      console.log("Login Successful ", success);
      this.isLoggedIn = true;
      this.router.navigate(['dashboard']);
    },
    error => {
      console.log("Login Failed", error);
    });
  }

  signUp(){
    this.router.navigate(['dashboard']);
  }

  
  username = ''
  password = ''
  invalidLogin = false

  // constructor(private router: Router,
  //   private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.auth.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }


}
