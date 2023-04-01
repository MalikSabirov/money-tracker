import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TRANSACTIONS } from '../mock-transactions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseUrl = environment.base_URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Transaction[]>('getTransactions', []))
    );
  }

  getTransaction(id: number): Observable<Transaction> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Transaction>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
    );
  }

  updateTransaction(transaction: Transaction): Observable<any> {
    return this.http.put(this.baseUrl, transaction, this.httpOptions).pipe(
      tap((_) => this.log(`updated transaction id=${transaction.id}`)),
      catchError(this.handleError<any>('updateTransaction'))
    );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http
      .post<Transaction>(this.baseUrl, transaction, this.httpOptions)
      .pipe(
        tap((newTransaction: Transaction) =>
          this.log(`added transaction w/ id=${newTransaction.id}`)
        ),
        catchError(this.handleError<Transaction>('addTransaction'))
      );
  }

  deleteTransaction(id: number): Observable<Transaction> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Transaction>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted transaction id=${id}`)),
      catchError(this.handleError<Transaction>('deleteTransaction'))
    );
  }

  searchTransaction(term: string): Observable<Transaction[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<Transaction[]>(`${this.baseUrl}/?comment=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found transactions matching "${term}"`)
            : this.log(`no transactions matching "${term}"`)
        ),

        catchError(this.handleError<Transaction[]>('searchTransaction', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`TransactionService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
