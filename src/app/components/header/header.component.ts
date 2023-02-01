import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public isLoggedIn: boolean = false;

  public constructor(private router: Router, private authService: AuthService) {
    this.initializeVariables().then();
  }

  public async onClickLogInButton(): Promise<void> {
    await this.router.navigateByUrl("/auth");
  }

  private async initializeVariables(): Promise<void> {
    // this.isLoggedIn = await this.authService.isLoggedIn();
    setTimeout(() => (this.isLoggedIn = true), 3000);
  }
}
