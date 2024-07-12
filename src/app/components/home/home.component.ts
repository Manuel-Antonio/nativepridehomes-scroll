import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActiveSectionService } from 'src/app/services/active-section.service';
import { loadTheme } from 'src/app/utils/theme-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDark : boolean = false;

  constructor(private activeSectionService: ActiveSectionService) {
    this.activeSectionService.getIsDark().subscribe(data => this.isDark = data)
  }
}
