import { Component, Input } from '@angular/core';
import { Message } from './../../../../../models';

@Component({
    selector: 'app-messages-main',
    styleUrls: ['./messages-main.component.css'],
    templateUrl: './messages-main.component.html'
})

export class MessagesMainComponent {
    @Input()
    messages: Message[];
}