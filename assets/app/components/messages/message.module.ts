import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessageListComponent } from './message-list';
import { MessageListContainerComponent } from './message-list-container';
import { MessageComponent, MessageInputComponent } from './common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
