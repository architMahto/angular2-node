import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MessageComponent,
  MessageInputComponent,
  MessageListComponent,
  MessagesMainComponent,
  MessagesMainContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MessageComponent,
    MessageInputComponent,
    MessageListComponent,
    MessagesMainComponent,
    MessagesMainContainerComponent
  ],
  exports: [
    MessagesMainContainerComponent
  ],
  providers: []
})

export class MessagesMainModule {}
