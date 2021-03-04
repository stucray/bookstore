import { Dictionary } from '@ngrx/entity';
import { Book } from '../models/book.model';
import * as fromReducers from '../store/reducers';

export const createState = (
  books: Book[] = [],
  loading: boolean = false,
  selectedBook: Book | null = null
): fromReducers.State => {
  let entities = books.reduce(
    (acc, book) => ((acc[book.id] = book), acc),
    {} as Dictionary<Book>
  );
  let ids = books.map((b) => b.id);

  let state: fromReducers.State = {
    ids: ids,
    entities: entities,
    loading: loading,
    selectedBook: books[0],
  };

  return state;
};
