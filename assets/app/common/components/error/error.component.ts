import { Component, OnInit } from '@angular/core';

import { Error } from '../../../models';
import { ErrorService } from '../../../services';

@Component({
  selector: 'app-error',
  styleUrls: ['./error.component.css'],
  templateUrl: './error.component.html'
})

export class ErrorComponent implements OnInit {
  error: Error

  displayed: string = 'none';

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorService.errorOccured
      .subscribe(
        (error: Error) => {
          this.error = error;
          this.displayed = 'block';
        }   
      );
  }

  onErrorHandled() {
    this.displayed = 'none';
  }
}