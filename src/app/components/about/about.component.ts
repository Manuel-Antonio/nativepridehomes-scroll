import { Component, OnInit } from '@angular/core';
import { profiles } from 'src/app/data/profiles.data';
import { Profile } from 'src/app/models/profile.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  profiles : Profile[] = profiles
  ngOnInit() {
  }
}
