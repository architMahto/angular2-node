import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMainModule } from './auth-main';

import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthMainModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
  providers: []
})

export class AuthModule {}