import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessagesMainModule } from './messages-main';

import { MessagesComponent } from './messages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
