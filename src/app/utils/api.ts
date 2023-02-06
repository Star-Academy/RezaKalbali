export const BASE_URL = "https://api.bijanprogrammer.com/games/";

export const API_USER_REGISTER = BASE_URL + "user/register";
export const API_USER_LOGIN = BASE_URL + "user/login";
export const API_USER_AUTH = BASE_URL + "user/auth";

export const POST_REQUEST_INIT: Partial<RequestInit> = {
  method: "post",
  headers: { "Content-type": "application/json" },
};
