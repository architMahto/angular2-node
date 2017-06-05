import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../../services';

@Component({
  selector: 'app-logout',
  styleUrls: ['./logout.component.css'],
  templateUrl: './logout.component.html'
})

export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'signin']);
  }
}