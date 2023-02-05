import { Injectable } from "@angular/core";
import { POST_REQUEST_INIT } from "../utils/api";
import { SnackbarService } from "./snackbar.service";
import { ApiError } from "../models/api-error";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public constructor(private snackbarService: SnackbarService) {}

  public async post<T>(
    url: string,
    body: any,
    init: Partial<RequestInit> = {}
  ): Promise<T | null> {
    const options: Partial<RequestInit> = {
      ...POST_REQUEST_INIT,
      body: JSON.stringify(body),
      ...init,
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.status === 200) return data as T;

    this.snackbarService.show((data as ApiError).message);
    return null;
  }
}