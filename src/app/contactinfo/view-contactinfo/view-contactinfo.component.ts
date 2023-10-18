import { Component } from '@angular/core';
import { ContactInfoService } from 'src/app/services/contactinfo.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-contactinfo',
  templateUrl: './view-contactinfo.component.html',
  styleUrls: ['./view-contactinfo.component.css']
})
export class ViewContactinfoComponent {
  contactData: any;
  searchQueryEmpty: boolean = true;
  foundContactInfo: any;
  selectedContactType: string = 'type';

  constructor(private contactinfoservice : ContactInfoService){}

  ngOnInit() {
    this.viewContactinfo();
  }

  viewContactinfo() {
    const userId = localStorage.getItem('id');
    this.contactinfoservice.viewContactinfo(userId, 1).subscribe((data) =>{
      console.log("data from api:", data);
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

    findContactByContactInfoType(ContactName: string) {
      this.contactinfoservice.searchContactinfoType(ContactName).subscribe((data) => {
        console.log("data from api:", data);
        this.foundContactInfo = data;
      })
    }

    findContactByContactInfoValue(ContactName: string) {
      this.contactinfoservice.searchContactinfoValue(ContactName).subscribe((data) => {
        console.log("data from api:", data);
        this.foundContactInfo = data;
      })
    }

    searchContactInfo(ContactName: string) {
      console.log(ContactName)
      if (ContactName === '') {
        this.searchQueryEmpty = true;
        this.foundContactInfo = null;
        return;
      }
      this.searchQueryEmpty = false;
      this.foundContactInfo = this.findContactByContactInfoType(ContactName);
      console.log(this.findContactByContactInfoType(ContactName));
    }

    searchContactInfoValue(ContactName: string) {
      console.log(ContactName)
      if (ContactName === '') {
        this.searchQueryEmpty = true;
        this.foundContactInfo = null;
        return;
      }
      this.searchQueryEmpty = false;
      this.foundContactInfo = this.findContactByContactInfoValue(ContactName);
      console.log(this.foundContactInfo);
    }

    search(ContactName: string) {
      if (this.selectedContactType === 'type') {
        this.searchContactInfo(ContactName);
      }
      else if (this.selectedContactType === 'value') {
        this.searchContactInfoValue(ContactName);
      }
    }

    changeContactInfo(selectedContactType: string) {
      console.log(selectedContactType);
      this.selectedContactType = selectedContactType;
    }
}
