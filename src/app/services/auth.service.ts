import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus = false;
  constructor(private http: HttpClient) { 
    if(localStorage.getItem('loginStatus'))
    { 
      this.loginStatus = localStorage.getItem('loginStatus') === 'true';
    }
  }


  /**
   * setLoginstatus
   */
  public setLoginStatus(flag) {
    this.loginStatus = flag;
    localStorage.setItem('loginStatus', (this.loginStatus?'true':'false'));
  }

  /**
   * getLoginStatus
   */
  public getLoginStatus() {
    return this.loginStatus;
  }

  /**
   * login
   */
  public login(params) {
    // let url = 'http://127.0.0.1:8000/api/login/' + params.email;
    // return this
    //   .http
    //   .get(url);

    return of(true);

  }
}
