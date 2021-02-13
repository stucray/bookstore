import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, pipe } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/books.service';
import * as BookActions from '../actions/books.actions';

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private bookService: BookService
  ) {}

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

  bookSelected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookActions.bookSelected),
        map((action) => action.bookId),
        tap((bookId) => {
          console.log(bookId);
          this.router.navigate(['books/' + bookId]);
        })
        //tap(bookId: string => ''))
        //this.router.navigate('books/' + bookId))
      ),
    { dispatch: false }
  );
}
