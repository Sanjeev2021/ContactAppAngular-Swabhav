import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Login, loginResponse } from 'src/app/Interfaces/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  show: boolean = false;
  error: string = ""
  showLoader: boolean = false;
  showerror: boolean = false;
  constructor(private router: Router, private loginUser: RegisterService) {
    //this._data = dataService;
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  
  });
  SignIn(data: any) {

    this.showLoader = true;
    this.showerror = false;

    const loginData: Login = {
      username: data.username,
      password: data.password,
    }

    this.loginUser.login(loginData).subscribe({
      next: (result: loginResponse) => {
        this.show = false
        localStorage.setItem("id", String(result))
        this.router.navigateByUrl('/')
      },
      error: (err: HttpErrorResponse) => {
        console.error(err); // Log the complete error object
        this.error = "An error occurred during login , Please check your username & password";
        setTimeout(() => {
          this.showLoader = false;
          this.show = true; // Show the error message
        }, 3000); // Delay for 3 seconds (3000 milliseconds)
      }      
    });
  }
}


