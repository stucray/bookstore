import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadRequest } from '../../store/actions/books.actions';
import { Book } from '../../models/book.model';

import * as fromBooks from '../../store/reducers/books.reducers';

import { selectAllBooks } from '../../store/selectors/books.selectors';

@Component({
  selector: 'app-book-summary-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-summary-container.component.html',
  styleUrls: ['./book-summary-container.component.scss'],
})
export class BookSummaryContainerComponent implements OnInit {
  books$: Observable<Book[]> | null;

  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.select(selectAllBooks);
  }

  ngOnInit(): void {
    this.store.dispatch(loadRequest());
  }
}
