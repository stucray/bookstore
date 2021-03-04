import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as BookActions from '../actions/books.actions';
import { Book } from '../../models/book.model';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Book> {
  loading: boolean;
  selectedBook: Book | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  selectedBook: null,
});

const bookReducer = createReducer(
  initialState,
  on(BookActions.loadSuccess, (state, action) =>
    adapter.setAll(action.books, state)
  ),
  on(BookActions.bookSelected, (state, action) => ({
    ...state,
    selectedBook: action.book,
  }))
);

export function reducers(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
