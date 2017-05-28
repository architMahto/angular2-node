import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { authMainRoutes } from './auth-main';
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
        redirectTo: 'auth-main'
      },
      ...authMainRoutes,
      ...logoutRoutes,
      ...signinRoutes,
      ...signupRoutes
    ]
  }
];