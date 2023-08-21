import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  isLoggedIn = false;

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  
  myfield = "";

  constructor(private auth: AuthService, private router: Router){}

  // signUp(){
  //   this.auth.signUp(this.loginForm.value).subscribe(success =>{
  //     console.log("Login Successful ", success);
  //     this.isLoggedIn = true;
  //     this.router.navigate(['dashboard']);
  //   },
  //   error => {
  //     console.log("Login Failed", error);
  //   });
  // }

  // signUp1(){
  //   this.router.navigate(['dashboard']);
  // }

  username = ''
  password = ''
  invalidLogin = false

  ngOnInit() {
  }

  checkLogin() {
    if(this.username=='' && this.password == ''){
      alert("Please enter username and password");
    }
    else if(this.username=='')
    {
      alert("Please enter username");
    }
    else if(this.password=='')
    {
      alert("Please enter password");
    }
    else{
      if (this.auth.authenticate(this.username, this.password)
      ) {
        alert("Login Successful");
        this.router.navigate(['/dashboard'])
        this.invalidLogin = false
        this.isLoggedIn = true
      } else
        this.invalidLogin = true
    }

  }
}

