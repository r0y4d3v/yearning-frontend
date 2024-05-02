import { request } from '@/config/request';

export interface LoginFrom {
  username: string;
  password: string;
  is_ldap: boolean;
  is_oidc: boolean;
}

export function signIn(login: LoginFrom) {
  return request.post(login.is_ldap ? '/yearning/ldap' : '/yearning/login', login);
}

export function systemRegisterState() {
  return request.get('/yearning/fetch');
}

export function systemLang() {
  return request.get('/yearning/lang');
}

export function getOIDCState() {
  return request.get('/yearning/oidc/state');
}
