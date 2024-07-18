import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  message: string = '';
  isWhatsappOpen = false;
  
  constructor(
    private whatsappService: WhatsappService
  ) {}

  sendWhatsappMessage() {
    this.whatsappService.sendMessage(this.message);
  }
  toggleWhatsapp() {
    this.isWhatsappOpen = !this.isWhatsappOpen;
  }
}
