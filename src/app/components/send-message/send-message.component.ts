import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
})
export class SendMessageComponent {
  message: string = '';
  isWhatsappOpen = false;

  constructor(private whatsappService: WhatsappService) {}

  sendWhatsappMessage() {
    if (this.message.trim() == '') {
      this.message =
        'Hello! I am interested in learning more about the services you offer. I am looking to build a house and would like to know more about your process, the materials you use and approximate costs. Could you provide me with more information? Thank you.';
    }
    this.whatsappService.sendMessage(this.message);
  }

  toggleWhatsapp() {
    this.isWhatsappOpen = !this.isWhatsappOpen;
  }
}
