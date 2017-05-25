import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageListComponent } from './message-list';
import { MessageListContainerComponent } from './message-list-container';
import { MessageComponent, MessageInputComponent } from './common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    MessageInputComponent,
    MessageListComponent,
    MessageListContainerComponent
  ],
  exports: [
    MessageListContainerComponent
  ],
  providers: []
})

export class MessageModule {}
