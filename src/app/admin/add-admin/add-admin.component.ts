import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  alert = false;
  error = '';
  form: FormGroup; // Declare form as a FormGroup

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // Create the form controls with validators

  showError(error: string) {
    this.error = error;
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  saveUser() {
    let returnFunc = false;
    Object.keys(this.form.value).forEach((key) => {
      const value = this.form.value[key].length;
      console.log("value ", value)
      if (value < 2) {
        this.showError('Fill in all the fields with atleast 2 characters');
        returnFunc = true;
      }
    });
    if (returnFunc) {
      return;
    }

    if (this.form.value['fullname'].length > 40) {
      this.showError('First name cannot be more than 25 characters');
      return;
    }

    if (this.form.value['username'].length > 25) {
      this.showError('Username cannot be more than 25 characters');
      return;
    }

    if (this.form.value['password'].length < 4) {
      this.showError('Password cannot be less than 4 characters');
      return;
    }

    if (this.form.value['password'].length > 25) {
      this.showError('Password cannot be more than 25 characters');
      return;
    }

    this.userService.saveUser(this.form.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/view-admin');
      },
      (error: any) => {
        this.showError(`Username already exists [${error.error.error}]`);
        console.log(error.error.error);
      }
    );
  }
}
