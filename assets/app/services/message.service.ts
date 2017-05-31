import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Message } from '../models';

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/message', message, { headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages() {
    return this.http.get('http://localhost:3000/message')
            .map((response: Response) => 
                  response.json().obj
                    .map(message => {
                      return {
                        content: message.content,
                        username: 'Dummy',
                        messageId: message.id,
                        userId: null
                      };
                }))
            .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
