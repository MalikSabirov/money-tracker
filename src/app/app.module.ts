import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, TransactionsComponent, TransactionDetailComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
