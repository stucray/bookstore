import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromBooks from '../reducers/books.reducers';

export const { selectAll } = fromBooks.adapter.getSelectors();

export const selectBookState = createFeatureSelector<fromBooks.State>(
  fromBooks.booksFeatureKey
);

export const selectAllBooks = createSelector(selectBookState, selectAll);

export const selectLoading = (state: fromBooks.State) => state.loading;
