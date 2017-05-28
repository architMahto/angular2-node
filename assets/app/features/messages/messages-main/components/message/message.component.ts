import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../../../models';
import { MessageService } from './../../../../../services';

@Component({
  selector: 'app-message',
  styleUrls: ['./message.component.css'],
  templateUrl: './message.component.html'
})

export class MessageComponent {
  @Input()
  message: Message;

  @Output()
  editClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private messageService: MessageService) {}

  onEdit() {
    this.editClicked.emit('A new value');
  }

  onDelete() {
    this.messageService.deleteMessage(this.message);
  }
}
