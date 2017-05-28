import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SigninComponent,
  SigninContainerComponent
} from './components';

@NgModule({
  imports: [
    CommonModule
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