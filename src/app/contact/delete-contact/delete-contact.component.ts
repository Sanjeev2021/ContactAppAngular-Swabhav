import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {
    contactData: any;

    constructor(
      private contactService: ContactService,
      private router : Router
    ){}

    ngOnInit(): void{
      this.viewContact();
    }

    viewContact() {
      const userId = localStorage.getItem('id');
      this.contactService.viewContact(userId , 1).subscribe(
        (response: any) => {
          this.contactData = response;
          console.log(this.contactData);
        },
        (error: any) => {
          console.error('Error Fetching contact data:', error);
        }
      );
    }

    deleteContact(id: string) {
      const userId = localStorage.getItem('id');
      const contactId = id;
      this.contactService.deleteContact(userId , contactId).subscribe(
        ()=> {
          console.log("contact deleted successfully");
        },
      );
      alert("Contact Deleted");
      this.viewContact();
    }

    updateContact(id: any) {
      console.log(id);
      
      this.router.navigateByUrl(id+"/update-contact/");
      
    }
}
