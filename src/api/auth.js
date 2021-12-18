import Cookies from 'js-cookie';
// User
const TokenKey = 'CWB-7B9E0D1E-8FED-45AF-B79A-AFB4BBEE5704';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 給後台使用
export function setAdminToken(token) {
  return Cookies.set("LDCC_Web_Admin", token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}