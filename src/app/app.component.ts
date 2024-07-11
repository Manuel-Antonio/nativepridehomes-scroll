import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ActiveSectionService } from './services/active-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nativepridehomes-scroll';
  constructor(private activeSectionService: ActiveSectionService) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    if (sections[index]) {
      this.activeSectionService.setActiveSection(sections[index].id);
    }
  }
  
  ngOnInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom',
      offset: 200,
    });
  }

  
}
