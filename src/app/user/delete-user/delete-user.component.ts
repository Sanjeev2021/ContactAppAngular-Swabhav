import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent  {
  userData: any;
  userID: any;
  route: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.viewUser();
    this.route.paramMap.subscribe((params : ParamMap) =>{
      this.userID = params.get('id');
      console.log('Received ID', this.userID);
      this.userData.viewUser(this.userID).subscribe((data: any) => this.userData = data);
    });
    // this.deleteUser(15);
    
  }

  viewUser() {
    this.userService.viewUser(1).subscribe(
      (response: any) => {
        this.userData = response;// never give any commnet over there always give response
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully:');
         // Refresh user data
         this.viewUser();
      },
    
    );
    alert("User Deleted Succesfully");
  }

  updateUser(id: any) {
    console.log(id);
    this.router.navigateByUrl("/update-user/"+id)
  }
}
