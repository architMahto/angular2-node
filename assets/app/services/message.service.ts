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
    let token = localStorage.getItem('token') 
              ? `?token=${localStorage.getItem('token')}` 
              : '';
    return this.http.post(`http://localhost:3000/message/${token}`, message, { headers })
            .map((response: Response) => {
              const message: Message = {
                content: response.json().obj.content,
                username: 'Dummy',
                messageId: response.json().obj._id,
                userId: null
              };
              this.messages.push(message);
              return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = localStorage.getItem('token') 
              ? `?token=${localStorage.getItem('token')}` 
              : '';
    return this.http.patch(`http://localhost:3000/message/${message.messageId}/${token}`, message, { headers })
            .map((response: Response) => {
              this.messages.push(message);
              return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
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
                                          messageId: message._id,
                                          userId: null
                                        };
                                      });
              this.messages = transformedMessages;
              return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    let token = localStorage.getItem('token') 
              ? `?token=${localStorage.getItem('token')}` 
              : '';
    return this.http.delete(`http://localhost:3000/message/${message.messageId}/${token}`)
            .map((response: Response) => {
              this.messages.splice(this.messages.indexOf(message), 1);
              return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));  
  }
}
