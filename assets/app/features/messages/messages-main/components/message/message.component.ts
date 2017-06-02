import { Component, Input } from '@angular/core';
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

  constructor(private messageService: MessageService) {}

  onEdit() {
    this.messageService.editMessage(this.message);
  }

  onDelete() {
    this.messageService.deleteMessage(this.message)
      .subscribe(
        result => { console.log(result); },
        error => { console.log(error); }
      );
  }
}
