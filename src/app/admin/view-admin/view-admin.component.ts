import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormGroup} from '@angular/forms';
import { ParamMap } from '@angular/router';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent {
  adminData: any;
  foundAdmin: any;
  searchQueryEmpty: boolean = true;
  userID : any;
  route: any;
  constructor(
    private adminService: AdminService,
  ) {}
  ngOnInit() {
    this.viewUser();
    // this.route.paramMap.subscribe((params : ParamMap) =>{
    //   this.userID = params.get('id');
    //   console.log('Received ID', this.userID);
    //   this.userData.viewUser(this.userID).subscribe((data: any) => this.userData = data);
    // });
  }

  viewUser() {
    this.adminService.viewAdmin(1).subscribe((data) => {
      console.log('data from Api: ', data);
      this.adminData = data;
    },
    (error) => {
      console.log('error from Api: ', error);
    });
  

  }

  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  performSearch() {
    this.searchEvent.emit(this.searchQuery);
  }

  findUserByUsername(username: string) {
    return this.adminData.find((user: any) => user.Username === username) || null;
  }

  searchUser(username: string) {
    console.log(username)
    if (username === '') {
      this.searchQueryEmpty = true;
      this.foundAdmin = null;
      return;
    }

    this.searchQueryEmpty = false;
    this.foundAdmin = this.findUserByUsername(username);
    console.log(this.foundAdmin)
  }
}
