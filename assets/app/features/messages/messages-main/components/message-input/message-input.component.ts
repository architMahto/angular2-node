import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Message } from '../../../../../models';
import { MessageService } from '../../../../../services';

@Component({
  selector: 'app-message-input',
  styleUrls: ['./message-input.component.css'],
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {
  message: Message;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messageIsEdit
      .subscribe((message: Message) => {
        this.message = message;
      });
  }

  onClear(form: NgForm) {
    this.message = null;
    form.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.message) {
      // Edit
      this.message.content = form.value.content;
      this.messageService.updateMessage(this.message)
        .subscribe(result => {
          console.log(result);
        });
      this.message = null;
    } else {
      // Create
      const message: Message = {
        content: form.value.content,
        username: 'Max'
      };
    
      this.messageService.addMessage(message)
        .subscribe(
          data => { console.log(data) },
          error => { console.error(error) }
        );
    }
    form.resetForm();
  }
}
