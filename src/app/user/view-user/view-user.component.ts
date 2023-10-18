import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup} from '@angular/forms';
import { ParamMap } from '@angular/router';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  userData: any;
  foundUser: any;
  searchQueryEmpty: boolean = true;
  userID : any;
  route: any;
  constructor(
    private userService: UserService,
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
    this.userService.viewUser(1).subscribe((data) => {
      console.log('data from Api: ', data);
      this.userData = data;
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
    return this.userService.searchUser(username).subscribe((data) => {
      console.log('data from Api: ', data);
      this.foundUser = data;
    })
  }

  searchUser(username: string) {
    console.log(username)
    if (username === '') {
      this.searchQueryEmpty = true;
      this.foundUser = null;
      return;
    }

    this.searchQueryEmpty = false;
    console.log(this.searchQueryEmpty)
    this.findUserByUsername(username)
  }
}
