import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('login', this.authService.isLoggedin(), next.data);
    
    if (next.data.type === 'AuthComponent') {
      if (this.authService.isLoggedin()) {
        this.route.navigate(['dashboard']);
        return false;
      } else {
        return true;
      }
    } else {
      if (this.authService.isLoggedin()) {
        return true;
      } else {
        this.route.navigate(['login']);
        return false;
      }
    }

    
  }
}
