import { Routes, RouterModule } from '@angular/router';
import { authRoutes, messagesRoutes } from './features';


const appRoutes: Routes = [
  { pathMatch: 'full', path: '', redirectTo: 'messages' },
  ...messagesRoutes,
  ...authRoutes
]

export const AppRouting = RouterModule.forRoot(appRoutes);
