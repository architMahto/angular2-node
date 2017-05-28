import { Component, Input } from "@angular/core";
import { Message } from '../../../../../models';

@Component({
  selector: 'app-message-list',
  styleUrls: ['./message-list.component.css'],
  templateUrl: './message-list.component.html'
})

export class MessageListComponent {
  @Input()
  messages: Message[];
}
