import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'src/books/models/book.model';

import * as fromBooks from '../../store';
import { getSelectedBook } from '../../store/selectors';

@Component({
  selector: 'app-view-book-details-page',
  templateUrl: './view-book-details-page.component.html',
  styleUrls: ['./view-book-details-page.component.scss'],
})
export class ViewBookDetailsPageComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private store: Store<fromBooks.State>) {
    this.book$ = store.select(getSelectedBook);
  }

  ngOnInit(): void {}
}
