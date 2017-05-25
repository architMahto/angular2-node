import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageListComponent } from './message-list';
import { MessageListContainerComponent } from './message-list-container';
import { MessageComponent } from './common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageListComponent,
    MessageListContainerComponent,
    MessageComponent
  ],
  exports: [
    MessageListContainerComponent,
  ],
  providers: []
})

export class MessageModule {}
