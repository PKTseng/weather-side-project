import Cookies from "js-cookie";
// User
const TokenKey = "weather";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

// 給後台使用
export function setAdminToken(token) {
  return Cookies.set("weather", token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
