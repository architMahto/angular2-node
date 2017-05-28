import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoutModule } from './logout';
import { SigninModule } from './signin';
import { SignupModule } from './signup';

import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LogoutModule,
    SigninModule,
    SignupModule
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