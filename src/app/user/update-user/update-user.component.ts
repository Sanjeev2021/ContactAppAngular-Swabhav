import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // import FormGroup and FormControl
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  alert = false;
  error = '';
  userID: any;
  form: FormGroup;
  router: any

  showError(error: string) {
    this.error = error;
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    router: Router
  ) {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.router = router
  }
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params =>{
  //     this.user.ID = params.get('id');

  //   })

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userID = params.get('id');
    });
  }

  // saveUser() {
  //   console.log(this.form.value);
  //   this.userService.saveUser(this.form.value).subscribe((res: any) => { // Explicitly annotate 'res' type
  //     console.log(res);
  //   });
  // }

  updateUser() {
    let returnFunc = false;
    Object.keys(this.form.value).forEach((key) => {
      const value = this.form.value[key].length;
      console.log('value ', value);
      if (value < 2) {
        console.log('ERROROROROOR');
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

    this.userService.updateUser(this.userID, this.form.value).subscribe(
      (res: any) => {
        // Explicitly annotate 'res' type
        console.log(res);
        this.router.navigateByUrl('/view-user');
      },
      (error: any) => {
        this.showError(`Username already exists [${error.error.error}]`);
        console.log(error.error.error);
      }
    );
  }
}
