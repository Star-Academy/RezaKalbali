import { Injectable } from "@angular/core";
import { UserRegister } from "../models/user-register";
import { ApiService } from "./api.service";
import { TokenObject } from "../models/token-object";
import { IdObject } from "../models/id-object";
import { API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER } from "../utils/api";
import { UserLogin } from "../models/user-login";
import { SnackbarService } from "./snackbar.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public cachedIsLoggedIn: boolean | null = null;
  public cachedUserId: number | null = null;

  public constructor(
    private apiService: ApiService,
    private snackbarService: SnackbarService
  ) {
    this.auth().then();
  }

  public static get token(): string {
    return localStorage.getItem("token") || "";
  }

  public async login(user: UserLogin): Promise<boolean> {
    const data = await this.apiService.post<TokenObject>(API_USER_LOGIN, user);
    if (!data) return false;

    await this.saveCache(data.token, true, data.id);
    if (!!data) {
      this.snackbarService.show("خوش آمدید", "var(--color-green)");
    }

    return !!data;
  }

  public async logOut(): Promise<void> {
    await this.saveCache(null, false, null);

    this.snackbarService.show(
      "از حساب کاربری خود خارج شدید.",
      "var(--color-info)"
    );
  }
  public async register(user: UserRegister): Promise<boolean> {
    const data = await this.apiService.post<TokenObject>(
      API_USER_REGISTER,
      user
    );
    if (!data) return false;

    await this.saveCache(data.token, true, data.id);
    if (!!data) {
      this.snackbarService.show(
        "حساب شما ایجاد شد؛ خوش آمدید.",
        "var(--color-green)"
      );
    }

    return !!data;
  }

  public async isLoggedIn(): Promise<boolean> {
    if (this.cachedIsLoggedIn === null) return await this.auth();
    return this.cachedIsLoggedIn;
  }

  private async auth(): Promise<boolean> {
    const data = await this.apiService.post<IdObject>(
      API_USER_AUTH,
      {
        token: AuthService.token,
      },
      {},
      false
    );

    await this.saveCache(AuthService.token, !!data, data?.id ?? null);

    return !!data;
  }

  private async saveCache(
    token: string | null,
    isLoggedIn: boolean,
    userId: number | null
  ): Promise<void> {
    this.cachedIsLoggedIn = isLoggedIn;

    if (!!token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");

    this.cachedUserId = userId;
  }
}
