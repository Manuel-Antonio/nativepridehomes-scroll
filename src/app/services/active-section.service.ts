import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { loadThemeModeDark } from '../utils/theme-utils';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {
  private activeSectionSubject = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSectionSubject.asObservable();
  isDark :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    const savedTheme = loadThemeModeDark();
    if (savedTheme === "dark") {
      this.changeIsDark(true);
    } else {
      this.changeIsDark(false);
    }
   
  }
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
