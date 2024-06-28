import { Component, HostListener, AfterViewInit, HostBinding } from '@angular/core';
import { saveTheme, loadTheme } from 'src/app/utils/theme-utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    this.isSticky = window.pageYOffset > 0;
  }

  toggleTheme() {
   
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }

  ngAfterViewInit() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  ngOnInit(): void {
    this.loadSavedTheme();
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  setTheme(theme: string): void {
    document.documentElement.classList.remove('theme-one-selected', 'theme-two-selected');
    document.documentElement.classList.add(`${theme}-selected`);
    saveTheme(theme);
  }

  loadSavedTheme(): void {
    const savedTheme = loadTheme();
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('theme-one'); // Default theme
    }
  }
  @HostBinding('class.dark-mode') isDarkMode: boolean = false;


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }

}
