import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {

  private projectsSource = new BehaviorSubject<Project[]>([]);
  projects$ = this.projectsSource.asObservable();

  private selectedIndexSource = new BehaviorSubject<number>(0);
  selectedIndex$ = this.selectedIndexSource.asObservable();

  private lightboxOpenSource = new BehaviorSubject<boolean>(false);
  lightboxOpen$ = this.lightboxOpenSource.asObservable();

  openLightbox(projects: Project[], selectedIndex: number): void {
    this.projectsSource.next(projects);
    this.selectedIndexSource.next(selectedIndex);
    this.lightboxOpenSource.next(true);
  }

  closeLightbox(): void {
    this.lightboxOpenSource.next(false);
  }

  prevImage(currentIndex: number, projects: Project[]): void {
    const newIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
    this.selectedIndexSource.next(newIndex);
  }

  nextImage(currentIndex: number, projects: Project[]): void {
    const newIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
    this.selectedIndexSource.next(newIndex);
  }
}
