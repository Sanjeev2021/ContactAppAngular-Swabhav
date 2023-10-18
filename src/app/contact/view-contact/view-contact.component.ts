import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  contactData : any;
  searchQueryEmpty: boolean = true;
  foundContact: any;
    constructor (private contactService: ContactService) {}

    ngOnInit() {
      this.viewContact();
    }

    viewContact() {
      const userId = localStorage.getItem('id');
        this.contactService.viewContact(userId , 1).subscribe((data) =>{
            console.log('data from api:', data);
            this.contactData = data;
        },
        (error) => {
          console.log('error from api:', error);
        }
        );
    }

    searchQuery: string = '';

    @Output() searchEvent = new EventEmitter<string>();

    performSearch() {
      this.searchEvent.emit(this.searchQuery);
    }

    findContactByContactName(ContactName: string) {
      return this.contactService.searchContact( ContactName).subscribe((data) => {
        console.log('data from Api:', data);
        this.foundContact = data;
      })
    }

    searchContact(ContactName: string) {
      console.log(ContactName)
      if (ContactName === '') {
        this.searchQueryEmpty = true;
        this.foundContact = null;
        return;
      }
      this.searchQueryEmpty = false;
      this.foundContact = this.findContactByContactName(ContactName);
      console.log(this.foundContact);
    }

}


