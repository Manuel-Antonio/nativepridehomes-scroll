import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { LightboxService } from 'src/app/services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent {
  projects: Project[] = [];
  selectedIndex: number = 0;
  lightboxOpen: boolean = false;

  constructor(private lightboxService: LightboxService) {}

  ngOnInit(): void {
    this.lightboxService.projects$.subscribe(projects => this.projects = projects);
    this.lightboxService.selectedIndex$.subscribe(index => this.selectedIndex = index);
    this.lightboxService.lightboxOpen$.subscribe(open => this.lightboxOpen = open);
  }

  closeLightbox(): void {
    this.lightboxService.closeLightbox();
  }

  prevImage(): void {
    this.lightboxService.prevImage(this.selectedIndex, this.projects);
  }

  nextImage(): void {
    this.lightboxService.nextImage(this.selectedIndex, this.projects);
  }

  openLightbox(projects: Project[], index: number): void {
    this.lightboxService.openLightbox(projects, index);
  }
}
