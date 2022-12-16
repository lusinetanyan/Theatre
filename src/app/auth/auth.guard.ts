import {inject} from '@angular/core';
import {
  Router,
  CanLoadFn
} from '@angular/router';
import {AuthService} from './auth.service';

export const authGuard: CanLoadFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    return true;
  }

  return router.navigate(['/login']);
};
