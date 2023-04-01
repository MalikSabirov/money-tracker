import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const transactions = [
      {
        id: 1,
        value: -1000,
        comment: 'for food',
      },
      {
        id: 2,
        value: -3000,
        comment: 'for house',
      },
      {
        id: 3,
        value: 2000,
        comment: 'salary',
      },
    ];
    return { transactions };
  }

  genId(transactions: Transaction[]): number {
    return transactions.length > 0
      ? Math.max(...transactions.map((Transaction) => Transaction.id)) + 1
      : 1;
  }
}
