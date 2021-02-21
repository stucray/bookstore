import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const loadRequest = createAction('[Book] Load Books Request');

export const loadSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBookRequest = createAction(
  '[Book] Load Book Request',
  props<{ bookId: string }>()
);

export const loadBookSuccess = createAction(
  '[Book] Load Book Request',
  props<{ book: Book }>()
);

export const bookSelected = createAction(
  '[Book] Book Selected',
  props<{ book: Book }>()
);
