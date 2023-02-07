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
    init: Partial<RequestInit> = {},
    showError: boolean = true
  ): Promise<T | null> {
    const options: Partial<RequestInit> = {
      ...POST_REQUEST_INIT,
      body: JSON.stringify(body),
      ...init,
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) return data as T;

    if (showError)
      this.snackbarService.show(
        (data as ApiError).message,
        "var(--color-error)"
      );
    return null;
  }
}
