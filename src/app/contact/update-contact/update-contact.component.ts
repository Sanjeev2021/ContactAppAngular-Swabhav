import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent {
  contactID: any;
  error: any;
  alert: any;
  form: FormGroup;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      contactname: ['', Validators.required],
    });
  }

  showError(error: string) {
    this.error = error;
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.contactID = params.get('id');
    });
  }

  updateContact() {
    let returnFunc = false;
    Object.keys(this.form.value).forEach((key) => {
      const value = this.form.value[key].length;
      console.log('value ', value);
      if (value < 2) {
        this.showError('Fill in all the fields with atleast 2 characters');
        returnFunc = true;
      }
    });
    if (returnFunc) {
      return;
    }

    if (this.form.value['contactname'].length > 40) {
      this.showError('Contact name cannot be more than 40 characters');
      return;
    }

    const userId = localStorage.getItem('id');
    this.contactService
      .updateContact(Number(userId), this.contactID, this.form.value)
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (error: any) => {
          this.showError(`An error occured [${error.error.error}]`);
          return;
        }
      );
  }
}
