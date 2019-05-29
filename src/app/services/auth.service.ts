import { Injectable } from '@angular/core';
import { BookingFormInterface } from 'app/layouts/auth/login/login.component';
import { of, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedinStatus = false;

  constructor(private http: HttpClientModule) { 
    let str = window.localStorage.getItem('loggedinStatus');
    if (str == 'true') {
      this.loggedinStatus = true;
    } else {
      this.loggedinStatus = false;
    }
  }

  /**
   * setLoginStatus
   */
  public setLoginStatus(flag: boolean): void {
    this.loggedinStatus = flag;
    window.localStorage.setItem('loggedinStatus', (this.loggedinStatus?'true':'false'));
  }

  /**
   * isLoggedin
   */
  public isLoggedin(): boolean {
    return this.loggedinStatus;
  }

  /**
   * getBookingFormValue
   */
  public getBookingFormValue(): Observable<BookingFormInterface> {
    let bf: BookingFormInterface = {
      email: 'DDDDD',
      password: 'fgfgfg'
    }

    let obj = of(bf);
    return obj;
    
  }

}
