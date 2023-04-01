import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const payments = [
      { id: 1, mode: 'tralala', isActive: true },
      { id: 2, mode: 'HAAHHAHA', isActive: false },
    ];
    return { payments };
  }

  genId(payments: Payment[]): number {
    return payments.length > 0
      ? Math.max(...payments.map((payment) => payment.id)) + 1
      : 1;
  }
}
