import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../core/services/chat.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: { sender: string, text: string }[] = [];
  userInput: string = '';
  userProfileImage: string | undefined = '';

  constructor(private chatService: ChatService, private authService: AuthService) {}

  ngOnInit() {
    this.messages.push({
      sender: 'bot',
      text: 'Hola. Gracias por contactar con el soporte técnico de InspiraVoc. ¿En qué te puedo ayudar hoy?'
    });
    
  }

  async sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ sender: 'user', text: this.userInput });
      
      const response = await this.chatService.getResponse(this.userInput);
      this.messages.push({ sender: 'bot', text: response });
      
      this.userInput = '';
    }
  }
}
