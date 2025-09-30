import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  messages: string[] = [];
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push(this.userInput);
      this.userInput = '';
    }
  }
}
