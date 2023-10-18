import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
    alert = false;
    error = "";
    form: FormGroup; // Declare form as a FormGroup
    router: any

    constructor(private contactService: ContactService, router: Router, private fb: FormBuilder) {
      this.form = this.fb.group({
        contactname: ['', Validators.required],
      });
      this.router = router
    }



    // Create the form controls with validators
  
   
  showError(error: string) {
    this.error = error;
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

    // saveContact() {
    //   const userId = localStorage.getItem('id');
    //   console.log(this.form.value.contactname);
    //   this.contactService.saveContact(Number(userId), this.form.value).subscribe((res: any)=>{
    //     console.log(res);
    //   })
    //   alert("Contact Created");
    // }

    saveContact() {
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

      if (this.form.value['contactname'].length > 40) {
        this.showError('Contact name cannot be more than 40 characters');
        return;
      }

      const userId = localStorage.getItem('id');
      console.log(this.form.value.contactname);
      this.contactService.saveContact(Number(userId), this.form.value).subscribe(
        (res: any)=>{
        console.log(res);
        //this.router.navigateByUrl('/view-contact');
        alert("Contact Created");
      },
        (error: any)=> {
          this.showError(`Error occured [${error.error.error}]`)
          return
        }
      );
    }
}


