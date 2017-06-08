import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { CommonComponentsModule} from './common';
import { AuthModule, MessagesModule } from './features';

import {
  AuthService,
  MessageService
} from './services';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      CommonComponentsModule,
      AuthModule,
      MessagesModule,
      AppRouting
    ],
    providers: [
      AuthService,
      MessageService
    ],
    bootstrap: [
      AppComponent
    ]
})

export class AppModule {}
