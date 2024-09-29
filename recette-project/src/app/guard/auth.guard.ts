import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isUserConnected()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { message: 'Vous devez être connecté pour voir les recettes' },
      });
      return false;
    }
  }
}