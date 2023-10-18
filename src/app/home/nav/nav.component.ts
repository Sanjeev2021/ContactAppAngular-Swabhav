import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() item: string = "";
  show: boolean = false;

  constructor(private router: Router) {
  }
  signOut() {
    localStorage.removeItem("id");
    this.router.navigateByUrl("/login")
  }

  userModal() {
    const modal = document.getElementById("userModal");
    if (modal != null) {
      modal.style.display = "block";
    }
  }
  closeModal() {
    const modal = document.getElementById("userModal");
    if (modal != null) {
      modal.style.display = "none";
    }
  }
}
