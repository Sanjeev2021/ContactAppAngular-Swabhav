import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cs : any;
  userId: string | null = localStorage.getItem("id")
  constructor(
    private router: Router,
    cookieservice: CookieService

    ) {
      this.cs = cookieservice;
     }
  
  ngOnInit(): void {
    if (this.userId === null) {
      this.router.navigateByUrl('/login');
    }
  }

  logout(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("id")

    this.cs.delete('token');
    this.router.navigateByUrl('/login');
  }

  optionsVisible = false;
  optionsContactVisible = false;
  optionsContactInfoVisible = false;
  optionsAdminVisible = false; 

  toggleOptions() {
    this.optionsVisible = !this.optionsVisible;
  }
  
  toggleAdminOptions() {  
    this.optionsAdminVisible = !this.optionsAdminVisible;
  }

  toggleOptionsContact() {
    this.optionsContactVisible = !this.optionsContactVisible;
  }

  toggleOptionsContactInfo() {
    this.optionsContactInfoVisible = !this.optionsContactInfoVisible;
  }

  nav(url: string) {
    this.router.navigateByUrl(url);
  }

  navUser() {

    this.router.navigateByUrl(`/update-user/${this.userId}`);
  }

  navId(url: string) {
     this.router.navigateByUrl(`/${this.userId}/${url}`);
  }
}
