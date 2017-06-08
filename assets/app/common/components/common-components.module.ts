import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error';
import { HeaderComponent } from './header';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ErrorComponent,
    HeaderComponent
  ],
  exports: [
    ErrorComponent,
    HeaderComponent
  ],
  providers: []
})

export class CommonComponentsModule {}