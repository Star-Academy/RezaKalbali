import { Component } from "@angular/core";
import { UserRegister } from "../../models/user-register";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  public isLoginMode: boolean = true;
  public user: UserRegister = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };

  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public async formSubmitHandler(): Promise<void> {
    if (this.isLoginMode) {
      await this.loginHandler();
    } else {
      await this.registerHandler();
    }
  }

  public async loginHandler(): Promise<void> {
    const isLoggedIn = await this.authService.login({
      username: this.user.username,
      password: this.user.password,
    });

    if (isLoggedIn) {
      await this.router.navigateByUrl("/");
    }
  }
  public async registerHandler(): Promise<void> {
    const isRegistered = await this.authService.register(this.user);
    if (isRegistered)
      setTimeout(async () => {
        await this.router.navigateByUrl("/");
      }, 1000);
  }
}
