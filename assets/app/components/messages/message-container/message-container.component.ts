import {Component} from '@angular/core';
import {Message} from '../../../models';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html'
})

export class MessageContainerComponent {
  message: Message = {
    content: 'A message',
    username: 'Max'
  };
}
