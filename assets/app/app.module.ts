import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MessageModule } from './components';

import { MessageService } from './services';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      MessageModule
    ],
    providers: [
      MessageService
    ],
    bootstrap: [
      AppComponent
    ]
})

export class AppModule {}
