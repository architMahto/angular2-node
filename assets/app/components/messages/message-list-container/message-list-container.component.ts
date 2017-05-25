import { Component, OnInit } from '@angular/core';

import { Message } from '../../../models';
import { MessageService } from '../../../services';

@Component({
  selector: 'app-message-list-container',
  templateUrl: './message-list-container.component.html'
})

export class MessageListContainerComponent implements OnInit{
  messages: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }
}
