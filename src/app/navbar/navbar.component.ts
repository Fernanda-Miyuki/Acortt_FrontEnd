import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon") as HTMLElement;
  const navLinks = document.getElementById("nav-links") as HTMLElement;

  menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });
});
