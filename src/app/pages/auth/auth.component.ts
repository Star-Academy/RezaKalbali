import { Component } from "@angular/core";
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  public isLoginMode: boolean = true;
  public user: User = {
    username: "",
    email: "",
    password: "",
  };

  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public async formSubmitHandler(): Promise<void> {
    const isLoggedIn = await this.authService.login(this.user);
    if (isLoggedIn) await this.router.navigateByUrl("/");
  }
}
