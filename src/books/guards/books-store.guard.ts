import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Book } from '../models/book.model';
import { loadRequest } from '../store/actions';
import { selectAllBooks } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class BooksStoreGuard implements CanActivate {
  constructor(private store: Store) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.getBooks().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private getBooks(): Observable<Book[]> {
    return this.store.select(selectAllBooks).pipe(
      tap((books: Book[]) => {
        console.log('books: ' + books);
        console.log('!books = ' + !books);
        if (!books || books.length == 0) {
          this.store.dispatch(loadRequest());
        }
      }),
      filter((books) => !!books),
      take(1)
    );
  }
}
