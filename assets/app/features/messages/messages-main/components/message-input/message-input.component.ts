import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Message } from '../../../../../models';
import { MessageService } from '../../../../../services';

@Component({
  selector: 'app-message-input',
  styleUrls: ['./message-input.component.css'],
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    const message: Message = {
      content: form.value.content,
      username: 'Max'
    };
    this.messageService.addMessage(message);
    form.resetForm();
  }
}
