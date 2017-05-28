import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LogoutComponent,
  LogoutContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogoutComponent,
    LogoutContainerComponent
  ],
  exports: [
    LogoutContainerComponent
  ],
  providers: []
})

export class LogoutModule {}