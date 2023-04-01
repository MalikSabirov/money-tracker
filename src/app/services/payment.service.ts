import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'api';

  getPayments(): Observable<Payment[]> {
    return this.http
      .get<Payment[]>(`${this.baseUrl}/payments`)
      .pipe(catchError(this.handleError<Payment[]>('getPayments', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}
