import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AuthModule, MessagesModule } from './features';

import { MessageService } from './services';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AuthModule,
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
