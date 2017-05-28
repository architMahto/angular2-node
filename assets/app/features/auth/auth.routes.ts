import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { logoutRoutes } from './logout';
import { signinRoutes } from './signin';
import { signupRoutes } from './signup';

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        pathMatch: 'full',
        path: '',
        redirectTo: 'signup'
      },
      ...signupRoutes,
      ...signinRoutes,
      ...logoutRoutes,
    ]
  }
];