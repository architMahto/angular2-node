import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../../models';
import { MessageService } from '../../../../../services';

@Component({
    selector: 'app-messages-main-container',
    templateUrl: './messages-main-container.component.html'
})

export class MessagesMainContainerComponent {
    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messages = this.messageService.getMessages();
    }
}