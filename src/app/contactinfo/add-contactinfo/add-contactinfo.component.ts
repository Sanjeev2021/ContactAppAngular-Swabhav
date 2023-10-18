import { Component } from '@angular/core';
import { Form, FormControl,FormGroup } from '@angular/forms';
import { ContactInfoService } from 'src/app/services/contactinfo.service';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-contactinfo',
  templateUrl: './add-contactinfo.component.html',
  styleUrls: ['./add-contactinfo.component.css']
})
export class AddContactinfoComponent {
  alert: any;
  error: any;
  form: FormGroup;
    constructor(private contactinfoservice: ContactInfoService, private fb: FormBuilder){

      this.form = this.fb.group({
        contactid : ['', Validators.required],
        contactinfotype : ['', Validators.required],
        contactinfovalue : ['', Validators.required]
      })

    }

    showError(error: string) {
      this.error = error;
      this.alert = true;
  
      setTimeout(() => {
        this.alert = false;
      }, 5000);
    }

    saveContactinfo() {
   
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

    if (this.form.value['contactinfotype'].length > 25) {
      this.showError('Contact Info Type cannot be more than 25 characters');
      return;
    }

    if (this.form.value['contactinfovalue'].length > 25) {
      this.showError('Contact Info Value cannot be more than 25 characters');
      return;
    }

      this.contactinfoservice.saveContactinfo(this.form.value).subscribe((res: any) =>{
        console.log(res);
      },
       (error: any) => {
        this.showError(`An error occured [${error.error.error}]`)
        return;
       }
      )
    }
}
