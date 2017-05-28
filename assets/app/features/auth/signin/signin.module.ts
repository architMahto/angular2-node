import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  SigninComponent,
  SigninContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SigninComponent,
    SigninContainerComponent
  ],
  exports: [
    SigninContainerComponent
  ],
  providers: []
})

export class SigninModule {}