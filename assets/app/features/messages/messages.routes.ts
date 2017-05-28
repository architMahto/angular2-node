import { Routes } from "@angular/router";
import { MessagesComponent } from './messages.component';
import { messagesMainRoutes } from './messages-main';

export const messagesRoutes: Routes = [
  {
    path: 'messages',
    component: MessagesComponent,
    children: [
      {
        pathMatch: 'full',
        path: 'messages-main',
        redirectTo: 'messages-main'
      },
      ...messagesMainRoutes
    ],
  }
];
