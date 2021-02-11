import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as BookActions from '../actions/books.actions';
import { Book } from '../../models/book.model';

export const booksFeatureKey = 'books';

export interface State {
  loading: boolean;
  books: Book[];
}

export const initialState: State = {
  loading: true,
  books: [],
};

const bookReducer = createReducer(
  initialState,
  on(BookActions.loadSuccess, (state, { books }) => ({
    loading: false,
    books,
  }))
);

export function reducers(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}

export const selectBookState = createFeatureSelector<State>('books');

export const selectAllBooks = createSelector(
  selectBookState,
  (state: State) => state.books
);

export const selectLoading = (state: State) => state.loading;
