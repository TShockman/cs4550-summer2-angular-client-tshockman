import {Injectable} from '@angular/core';
import {USER_API_URL, LOGIN_API_URL, PROFILE_API_URL, REGISTER_API_URL, LOGOUT_API_URL} from './api-constants';

@Injectable()
export class UserServiceClient {
  login(user) {
    return fetch(LOGIN_API_URL, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }

  register(user) {
    return fetch(REGISTER_API_URL, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }

  getProfile() {
    return fetch(PROFILE_API_URL, {
      method: 'get',
      credentials: 'include'
    }).then(response => response.json());
  }

  deleteUser() {
    return fetch(PROFILE_API_URL, {
      method: 'delete',
      credentials: 'include'
    });
  }

  logout() {
    return fetch(LOGOUT_API_URL, {
      method: 'post',
      credentials: 'include'
    });
  }

  updateProfile(user) {
    return fetch(PROFILE_API_URL, {
      method: 'put',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }
}

