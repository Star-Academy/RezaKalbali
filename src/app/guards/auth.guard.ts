import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot
    // state: RouterStateSnapshot
  ): boolean {
    if (route.routeConfig?.path?.startsWith("auth")) {
      // this.router.navigateByUrl("/").then();
      return true;
    }
    return true;
  }
}
