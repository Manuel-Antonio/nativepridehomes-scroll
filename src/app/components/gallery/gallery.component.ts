import { Component } from '@angular/core';
import { categories } from 'src/app/data/categories';
import { projects } from 'src/app/data/projects';
import { Category } from 'src/app/models/category.model';
import { Project } from 'src/app/models/project.model';
import { LightboxService } from 'src/app/services/lightbox.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  projects: Project[] = projects;
  categories: Category[] = categories;
  filteredProjects: Project[] = projects;
  constructor(private lightboxService: LightboxService) {}
  filterProjects(category: Category) {
    this.filteredProjects = this.projects.filter(
      (project) => project.category.id === category.id
    );
  }

  clearFilter() {
    this.filteredProjects = this.projects;
  }

  openLightbox(index: number): void {
    this.lightboxService.openLightbox(this.filteredProjects, index);
  }
}
