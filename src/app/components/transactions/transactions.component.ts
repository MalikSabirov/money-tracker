import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from 'src/app/mock-transactions';
import { Transaction } from 'src/app/models/transaction';
import { MessageService } from 'src/app/services/message.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor(private transactionService: TransactionService) {}

  transactions: Transaction[] = [];

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService
      .getTransactions()
      .subscribe((transactions) => (this.transactions = transactions));
  }
}
