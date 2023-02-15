import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {RouteGuard} from '../enums/route-guard';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public constructor(private authService: AuthService, private router: Router) {}

  public async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const routeGuard = this.getRouteGuard(route);
    const isLoggedIn = await this.authService.isLoggedIn();

    if (
      (isLoggedIn && routeGuard === RouteGuard.GUARDED) ||
      (!isLoggedIn && routeGuard === RouteGuard.HIDE_FOR_LOGGED_IN)
    ) {
      return true;
    }

    this.router.navigateByUrl('/').then();
    return false;
  }

  private getRouteGuard(route: ActivatedRouteSnapshot): RouteGuard {
    if (route.routeConfig?.path?.startsWith('profile')) {
      return RouteGuard.GUARDED;
    } else if (route.routeConfig?.path?.startsWith('auth')) {
      return RouteGuard.HIDE_FOR_LOGGED_IN;
    }
    return RouteGuard.PUBLIC;
  }
}
