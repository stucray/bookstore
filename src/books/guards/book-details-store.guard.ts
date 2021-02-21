import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromRoot from '../../app/store';

import { Book } from '../models/book.model';
import { loadBookRequest } from '../store/actions';
import { getSelectedBook } from '../store/selectors';
@Injectable({
  providedIn: 'root',
})
export class BookDetailsStoreGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let bookId = route.paramMap.get('bookId');
    console.log('canActivate() bookId = ' + bookId);
    return this.getBook(bookId).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private getBook(bookId: string | null): Observable<Book | null> {
    return this.store.select(getSelectedBook).pipe(
      tap((book) => {
        if (!book && bookId) {
          console.log('Dispatching loadBookRequestAction. bookId = ' + bookId);
          this.store.dispatch(loadBookRequest({ bookId: bookId }));
        }
      }),
      filter((book) => book !== null),
      take(1)
    );
  }

  // private getBook(): Observable<Book> {
  //   //   let bookId$ = this.store
  //   //       .select(fromRoot.getRouterState)
  //   //   .pipe(map((router) => router.state.params.id));
  //   return this.store.select(getSelectedBook).pipe(
  //     tap(() => console.log('getBook()')),
  //     tap((book) => {
  //       if (!book) {
  //         this.store.dispatch(loadBookRequest());
  //       }
  //     }),
  //     filter((book) => !!book),
  //     take(1)
  //   );
  // }
}
