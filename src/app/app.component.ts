import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nativepridehomes-scroll';
  ngOnInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom',
      offset: 200,
    });
  }
}
