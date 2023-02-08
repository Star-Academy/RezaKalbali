import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ButtonType } from "../../enums/button-type";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  public ButtonType = ButtonType;
  public isLoginMode: boolean = true;
  public userForm = this.formBuilder.group({
    username: ["", [Validators.required, Validators.pattern]],
    email: ["", [Validators.required, Validators.pattern]],
    password: ["", [Validators.required, Validators.min, Validators.max]],
    repeatPassword: ["", [Validators.required, Validators.min, Validators.max]],
  });
  public loading: boolean = false;
  public isSubmitted: boolean = false;

  public constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  public async formSubmitHandler(): Promise<void> {
    this.isSubmitted = true;

    if (
      this.isLoginMode &&
      this.checkFormInputValidation("username") &&
      this.checkFormInputValidation("password")
    ) {
      await this.loginHandler();
    } else if (this.userForm.valid) {
      await this.registerHandler();
    }
  }

  public checkFormInputValidation(name: string): boolean {
    return this.userForm.controls[name].valid;
  }

  public async loginHandler(): Promise<void> {
    this.loading = true;

    const isLoggedIn = await this.authService.login({
      username: this.userForm.value.username,
      password: this.userForm.value.password,
    });
    this.loading = false;

    if (isLoggedIn) {
      await this.router.navigateByUrl("/");
    }
    console.log(this.userForm);
  }

  public async registerHandler(): Promise<void> {
    this.loading = true;
    const isRegistered = await this.authService.register(this.userForm.value);
    this.loading = false;

    if (isRegistered) await this.router.navigateByUrl("/");
  }
}
