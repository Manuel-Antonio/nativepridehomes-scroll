import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActiveSectionService } from 'src/app/services/active-section.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  isDark: boolean = false;
  suscription!: Subscription;
  constructor(private activeSectionService: ActiveSectionService) {
    this.suscription = this.activeSectionService
      .getIsDark()
      .subscribe((data) => (this.isDark = data));
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
