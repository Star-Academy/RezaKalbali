import { Injectable } from "@angular/core";
import { UserRegister } from "../models/user-register";
import { ApiService } from "./api.service";
import { TokenObject } from "../models/token-object";
import { IdObject } from "../models/id-object";
import { API_USER_LOGIN, API_USER_REGISTER } from "../utils/api";
import { UserLogin } from "../models/user-login";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public cachedIsLoggedIn: boolean = false;
  public cachedUserId: number | null = null;

  private static get token(): string {
    return localStorage.getItem("token") || "";
  }

  public constructor(private apiService: ApiService) {}

  public async login(user: UserLogin): Promise<boolean> {
    const data = await this.apiService.post<TokenObject>(API_USER_LOGIN, user);
    if (!data) return false;

    await this.saveCache(data.token, true, data.id);

    return !!data;
  }

  public async register(user: UserRegister): Promise<boolean> {
    const data = await this.apiService.post<TokenObject>(
      API_USER_REGISTER,
      user
    );

    if (data?.token) {
      localStorage.setItem("token", data?.token);
    }

    return !!data;
  }

  public async isLoggedIn(): Promise<boolean> {
    if (this.cachedIsLoggedIn !== null) return this.cachedIsLoggedIn;
    return this.auth();
  }

  private async auth(): Promise<boolean> {
    const data = await this.apiService.post<IdObject>("", {
      toke: AuthService.token,
    });

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
