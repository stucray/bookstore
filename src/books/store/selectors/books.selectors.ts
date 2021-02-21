import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Book } from '../../models/book.model';
import * as fromRoot from '../../../app/store';
import * as fromBooks from '../reducers/';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { ɵangular_packages_router_router_b } from '@angular/router';
import { setTestabilityGetter } from '@angular/core';

export const { selectAll, selectEntities } = fromBooks.adapter.getSelectors();

export const selectBookState = createFeatureSelector<fromBooks.State>(
  fromBooks.booksFeatureKey
);

export const selectBookEntities = createSelector(
  selectBookState,
  selectEntities
);

export const selectAllBooks = createSelector(selectBookState, selectAll);

export const getSelectedBook = createSelector(
  selectBookState,
  (state) => state.selectedBook
);

export const selectLoading = (state: fromBooks.State) => state.loading;
