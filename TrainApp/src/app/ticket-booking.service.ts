import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SourceDest } from './sourceDest';
import { Observable } from 'rxjs';
import { BookTicketParam } from './bookTicketParam';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  _fareUrl = `http://${window.location.host}:5001/createRouteAndgetFare`;
  _bookTicketUrl = `http://${window.location.host}:5001/v1/users/book-ticket`;
  constructor(private __http:HttpClient) { }

  
  getFare(sd: SourceDest): Observable<any> {
    return this.__http.post<any>(this._fareUrl, sd);
  }

  bookTicket(userInfo:BookTicketParam): Observable<any>{
    return this.__http.post<any>(this._bookTicketUrl, userInfo);
  }

}
