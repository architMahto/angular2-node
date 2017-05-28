import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SignupComponent,
  SignupContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignupComponent,
    SignupContainerComponent
  ],
  exports: [
    SignupContainerComponent
  ],
  providers: []
})

export class SignupModule {}