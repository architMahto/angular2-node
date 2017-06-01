import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Message } from '../models';

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http) {}

  addMessage(message: Message) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/message', message, { headers })
            .map((response: Response) => {
              this.messages.push(message);
              return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    
  }

  getMessages() {
    return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
              let transformedMessages: Message[] = [];
              transformedMessages = response.json().obj
                                      .map(message => {
                                        return {
                                          content: message.content,
                                          username: 'Dummy',
                                          messageId: message.id,
                                          userId: null
                                        };
                                      });
              this.messages = transformedMessages;
              return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
