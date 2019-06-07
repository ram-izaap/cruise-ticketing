import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  /**
   * getAvailableSeats
   */
  public getAvailableSeats(date) {
    switch (date) {
      case '2019-06-14':
        return 0;
        break;
    
      default:
        break;
    }
    return 9;
  }

  public createBooking(data: any) {
    console.log(data);
    return this
      .http
      .post('', data);      
  }
}
