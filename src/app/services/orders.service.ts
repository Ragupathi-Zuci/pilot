import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from './orders';
import { Observable, catchError, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'http://localhost:3001/orders';

  constructor(private http: HttpClient) {}

  submitOrder(order: Orders): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  getProducts(): Observable<Orders> {
    return this.http.get<Orders>(this.apiUrl)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
