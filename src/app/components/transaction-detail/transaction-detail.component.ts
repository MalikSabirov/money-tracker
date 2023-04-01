import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  transaction: Transaction | undefined;

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.transactionService
      .getTransaction(id)
      .subscribe((transaction) => (this.transaction = transaction));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.transaction) {
      this.transactionService
        .updateTransaction(this.transaction)
        .subscribe(() => this.goBack());
    }
  }
}
