import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  SignupComponent,
  SignupContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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