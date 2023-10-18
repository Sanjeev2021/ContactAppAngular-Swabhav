import { Component } from '@angular/core';
import { ContactInfoService } from 'src/app/services/contactinfo.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-delete-contactinfo',
  templateUrl: './delete-contactinfo.component.html',
  styleUrls: ['./delete-contactinfo.component.css']
})
export class DeleteContactinfoComponent {
    contactinfoData: any;
    constructor(
      private contactinfoservice : ContactInfoService,
      private router : Router
    ){}

    ngOnInit(): void {
      this.viewContactinfo();
    }

    viewContactinfo() {
      const userId = localStorage.getItem('id');
      this.contactinfoservice.viewContactinfo(userId, 1).subscribe(
        (response : any) => {
          this.contactinfoData = response;
        },
        (error : any) => {
          console.log('Error from fetching contactinfo data:', error);
        }
      );
    }
    deleteContactinfo(id: string) {
        const userId = localStorage.getItem('id');
        const contactinfoId = id;
        this.contactinfoservice.deleteContactinfo(userId, contactinfoId).subscribe (
          ()=> {
            console.log("Contact info successfully deleted");
          },
        );
        alert("Contact Info Deleted Succesfully")
    }

    updateContactinfo(refer: any, id: any) {
      console.log(id);

      this.router.navigate(['/'+id+'/update-contactinfo'+'/'+refer]);
    }

}
