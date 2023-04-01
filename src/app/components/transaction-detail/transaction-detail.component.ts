import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent {
  @Input() transaction?: Transaction;
}
