import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { testimonials } from 'src/app/data/testimonials.data';
import { Testimonial } from 'src/app/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [
    trigger('testimonialSlide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = testimonials;
  currentIndex: number = 0;
  showTestimonial: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  prevTestimonial(): void {
    this.showTestimonial = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
      this.showTestimonial = true;
    }, 0);
  }

  nextTestimonial(): void {
    this.showTestimonial = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
      this.showTestimonial = true;
    }, 0);
  }
}
