import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AuthMainComponent,
  AuthMainContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthMainComponent,
    AuthMainContainerComponent
  ],
  exports: [
    AuthMainContainerComponent
  ],
  providers: []
})

export class AuthMainModule {}