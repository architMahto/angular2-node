import { Injectable, EventEmitter } from '@angular/core';

import { Error } from '../models';

@Injectable()
export class ErrorService {
  errorOccured: EventEmitter<Error> = new EventEmitter<Error>();

  handleError(error: any) {
    const errorData: Error = {
      title: error.title,
      message: error.error.message
    }
    this.errorOccured.emit(errorData);
  }
}