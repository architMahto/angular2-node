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
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => { this.messages = messages; },
                (error: any) => { console.log(error); }
            );
    }
}