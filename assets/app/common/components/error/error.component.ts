import { Component } from '@angular/core';

import { Error } from '../../../models';

@Component({
  selector: 'app-error',
  styleUrls: ['./error.component.css'],
  templateUrl: './error.component.html'
})

export class ErrorComponent {
  error: Error

  displayed: string = 'none';

  onErrorHandled() {
    this.displayed = 'none';
  }
}