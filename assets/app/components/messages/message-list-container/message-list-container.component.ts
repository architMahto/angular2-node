import {Component} from '@angular/core';
import {Message} from '../../../models';

@Component({
  selector: 'app-message-list-container',
  templateUrl: './message-list-container.component.html'
})

export class MessageListContainerComponent {
  message: Message = {
    content: 'A message',
    username: 'Max'
  };

  messages: Message[] = [
    { content: 'A message', username: 'Max' },
    { content: 'Something else', username: 'Max' },
    { content: '3rd Message!', username: 'Max' },
  ]
}
