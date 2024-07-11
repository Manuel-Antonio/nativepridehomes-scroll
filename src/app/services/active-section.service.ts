import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {
  private activeSectionSubject = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSectionSubject.asObservable();

  setActiveSection(section: string) {
    this.activeSectionSubject.next(section);
  }
}
