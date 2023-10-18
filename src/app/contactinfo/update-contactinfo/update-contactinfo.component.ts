import { Component } from '@angular/core';
import { ContactInfoService } from 'src/app/services/contactinfo.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contactinfo',
  templateUrl: './update-contactinfo.component.html',
  styleUrls: ['./update-contactinfo.component.css']
})
export class UpdateContactinfoComponent {
    contactInfoID: any;
    ReferId: any;
    error: any;
    alert: any;
    form: FormGroup;

    constructor(private contactinfoservice: ContactInfoService,
      private route : ActivatedRoute,
      private fb: FormBuilder
      ){

        this.form = this.fb.group({
          contactinfotype : ['', Validators.required],
          contactinfovalue: ['', Validators.required]
        })
      }

    ngOnInit(): void{
      this.route.paramMap.subscribe(params =>{
        this.contactInfoID = params.get('id');
        this.ReferId = params.get('referid');
    })
  }

  showError(error: string) {
    this.error = error;
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  updateContactinfo() {
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

    this.contactinfoservice.updateContactinfo(this.ReferId, Number(localStorage.getItem("id")), this.contactInfoID, this.form.value).subscribe((res:any) =>{
      console.log(res);
    })
    alert("ContactInfo Updated Succesfully")
  }

    onsubmit() {
      alert("Succesfully registered");
    }
  }

