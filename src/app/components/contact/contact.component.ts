import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  message: string = '';
  isCompleteLink: boolean = false;
  recipient = 'manuelhuaman1998@gmail.com';
  mailToLink!: SafeUrl;
  mapLoaded = false;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required],
      projectDescription: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: [''],
    });
    this.mailToLink = this.sanitizer.bypassSecurityTrustUrl('');
  }

  ngOnInit(): void {}

  sendToMail(): any {
    if (this.contactForm.valid) {
      const subject = this.contactForm.value.subject || '';
      const projectDescription =
        this.contactForm.value.projectDescription || '';
      const name = this.contactForm.value.name || '';
      const email = this.contactForm.value.email || '';
      const phone = this.contactForm.value.phone || '';

      const formattedBody = `
        Hello,

        ${projectDescription}

        Regards,
        ${name}
        Mail: ${email}
        Phone: ${phone}
    `.trim();

      const mailTo = `mailto:${this.recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(formattedBody)}`;
      this.mailToLink = this.sanitizer.bypassSecurityTrustUrl(mailTo);
      this.isCompleteLink = true;
      this.contactForm.reset();
    }
  }

  loadMap() {
    this.mapLoaded = true;
  }
}
