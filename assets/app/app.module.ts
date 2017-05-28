import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { CommonComponentsModule} from './common';
import { AuthModule, MessagesModule } from './features';

import { MessageService } from './services';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      CommonComponentsModule,
      AuthModule,
      MessagesModule,
      AppRouting
    ],
    providers: [
      MessageService
    ],
    bootstrap: [
      AppComponent
    ]
})

export class AppModule {}
