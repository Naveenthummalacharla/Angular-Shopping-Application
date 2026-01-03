import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService(); // Instantiate AuthService
  const isLoggedIn = authService.isLoggedIn(); // Call isLoggedIn method on the instance
  if (isLoggedIn) {
    window.location.href = '/login'; // Redirect to login page
    return false; // Prevent navigation to the guarded route
  }
  return true;
};
