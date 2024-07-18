import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ActiveSectionService } from './services/active-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

    const progressBar = document.getElementById('progressBar') as HTMLElement;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
  }

  ngOnInit() {
    AOS.init({
      duration: 400,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom'
    });
  }
}
