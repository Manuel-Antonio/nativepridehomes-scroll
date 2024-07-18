import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private apiUrl = 'https://api.whatsapp.com/send'; // URL del servicio de WhatsApp
  private phoneNumber = "14054149628"
  constructor() {}

  sendMessage(message: string) {
    const url = `${this.apiUrl}?phone=${this.phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
