import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MessagesModule } from './components';

import { MessageService } from './services';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      MessagesModule
    ],
    providers: [
      MessageService
    ],
    bootstrap: [
      AppComponent
    ]
})

export class AppModule {}
