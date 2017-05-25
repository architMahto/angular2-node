import { Component } from '@angular/core';

import { Message } from '../../../../models';
import { MessageService } from '../../../../services';

@Component({
  selector: 'app-message-input',
  styleUrls: ['./message-input.component.css'],
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSave(value: string) {
    const message: Message = {
      content: value,
      username: 'Max'
    };
    this.messageService.addMessage(message);
  }
}
