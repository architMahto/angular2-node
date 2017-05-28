import { AuthComponent, MessagesComponent } from './features';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { pathMatch: 'full', path: '', redirectTo: 'messages' },
  { path: 'messages', component: MessagesComponent },
  { path: 'auth', component: AuthComponent },
]

export const AppRouting = RouterModule.forRoot(appRoutes);
