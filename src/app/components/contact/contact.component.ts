import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  message: string = '';
  isComplete: boolean = false;
  recipient = 'destinatario@example.com';
  subject = 'Asunto del correo';
  body = 'Contenido del correo';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      projectDescription: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: [''],
    });
  }

  ngOnInit(): void {}

  mailToForm() {
    if (this.contactForm.valid) {

      console.log('Formulario válido, datos enviados:', this.contactForm.value);
      this.message = '📩 Form submitted successfully! 🎉🎉';
      // Puedes resetear el formulario después del envío exitoso
      this.contactForm.reset();
      this.isComplete = true;
      if (this.isComplete) {
        setTimeout(() => {
          this.isComplete = false;
          this.message = '';
        }, 3000);
      }
    }
  }
}
