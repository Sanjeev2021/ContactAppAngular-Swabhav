import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateUser } from 'src/app/Interfaces/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  duplicateRecord: string = '';
  show: boolean = false;
  error: string = '';
  router: any;
  isAdmin: boolean = false;
  registerForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
    ]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    isAdmin: new FormControl(false),
  });
  constructor(private registerUser: RegisterService, router: Router) {
    this.router = router;
  }
  SignUp(data: any) {
    const userData: CreateUser = {
      FullName: data.fullname,
      username: data.username,
      password: data.password,
      isAdmin: this.isAdmin,
    };

    this.registerUser.register(userData).subscribe({
      next: (result: any) => {
        this.router.navigateByUrl('/');
      },
      error: (errorResponse: HttpErrorResponse) => {
        if (errorResponse.error.length >= 1) {
          this.error = '';
          for (let i = 0; i < errorResponse.error.length; i++)
            this.error += errorResponse.error[i].description;
        } else if (errorResponse.error.Message != '') {
          this.error = errorResponse.error.Message;
        } else
          this.duplicateRecord = 'Password and Confirm Password does not match';
        this.show = true;
      },
    });
  }
  get nameValidator() {
    return this.registerForm.get('name');
  }
  get usernameValidator() {
    return this.registerForm.get('email');
  }
  get passwordValidator() {
    return this.registerForm.get('email');
  }
  get cpasswordValidator() {
    return this.registerForm.get('email');
  }

  get isAdminValidator() {
    return this.registerForm.get('isAdmin');
  }

  // Toggle isAdmin flag based on user selection
  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
    this.isAdminValidator?.setValue(this.isAdmin);
  }
}
