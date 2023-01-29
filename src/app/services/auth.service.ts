import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { ApiService } from "./api.service";
import { TokenObject } from "../models/token-object";
import { IdObject } from "../models/id-object";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public constructor(private apiService: ApiService) {}

  public async login(user: User): Promise<boolean> {
    const data = await this.apiService.post<TokenObject>("", user);

    if (data?.token) {
      localStorage.setItem("token", data?.token);
    }

    return !!data;
  }

  public async isLoggedIn(): Promise<boolean> {
    const token = localStorage.getItem("token");

    const data = await this.apiService.post<IdObject>("", { token });
    return !!data;
  }
}
