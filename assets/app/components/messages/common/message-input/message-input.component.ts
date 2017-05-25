import { Component } from '@angular/core';

@Component({
  selector: 'app-message-input',
  styleUrls: ['./message-input.component.css'],
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  onSave(value: string) {
    console.log(value);
  }
}
