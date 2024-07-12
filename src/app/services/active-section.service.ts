import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {
  private activeSectionSubject = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSectionSubject.asObservable();
  isDark :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setActiveSection(section: string) {
    this.activeSectionSubject.next(section);

  }

  changeIsDark(value : boolean) {
    this.isDark.next(value);
  }

  getIsDark() {
    return this.isDark.asObservable()
  }
}
