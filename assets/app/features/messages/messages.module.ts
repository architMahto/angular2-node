import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesMainModule } from './messages-main';

import { MessagesComponent } from './messages.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesMainModule
  ],
  declarations: [
    MessagesComponent
  ],
  exports: [
    MessagesComponent
  ],
  providers: []
})

export class MessagesModule {}
