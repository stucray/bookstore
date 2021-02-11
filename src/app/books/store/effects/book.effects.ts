import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, pipe } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/books.service';
import * as BookActions from '../actions/books.actions';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadRequest),
      mergeMap(() =>
        this.bookService.getAllBooks().pipe(
          map((books: Book[]) => BookActions.loadSuccess({ books })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
