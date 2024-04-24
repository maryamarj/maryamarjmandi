import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  items: any[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/', id: 'about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/', id: 'contact-me', active: true },
    { name: 'CV', link: '/cv' },
  ];

  selectedIndex = 0;
  constructor(private router: Router) {}

  setActiveClass(index: any) {
    this.items.forEach((item) => {
      item.active = false;
    });
    index.active = true;
  }

  goToContact(fragment: any) {
    this.router.navigateByUrl(fragment);
  }
  goToAbout(fragment: any) {
    this.router.navigateByUrl(fragment);
  }
}
