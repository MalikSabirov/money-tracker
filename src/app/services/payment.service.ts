import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  getPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>('/payments', { responseType: 'json' });
  }
}
