import { Action, createReducer, on } from '@ngrx/store';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as fromRoot from '../../../app/store';
import * as BookActions from '../actions/books.actions';
import { Book } from '../../models/book.model';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Book> {
  loading: boolean;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  loading: false,
});

const bookReducer = createReducer(
  initialState,
  on(BookActions.loadSuccess, (state, action) =>
    adapter.setAll(action.books, state)
  )
);

export function reducers(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
