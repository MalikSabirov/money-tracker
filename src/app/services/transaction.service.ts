import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TRANSACTIONS } from '../mock-transactions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private messageService: MessageService) {}

  getTransactions(): Observable<Transaction[]> {
    const transactions = of(TRANSACTIONS);
    this.messageService.add('TransactionService: fetched transactions');
    return transactions;
  }
}
