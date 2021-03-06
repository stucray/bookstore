import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/book.model';
import { BookSummaryContainerComponent } from '../containers/book-summary-container/book-summary-container.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl = 'http://euclid:8080/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    console.log('BookService: getAllBooks()');
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBook(id: string): Observable<Book> {
    console.log('BookService: getBook() id: ' + id);
    return this.http.get<Book>(this.booksUrl + '/' + id);
  }
}
