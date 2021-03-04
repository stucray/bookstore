import { Dictionary } from '@ngrx/entity';

import { Book } from 'src/books/models/book.model';
import * as fromSelectors from '../selectors';
import * as generators from '../../models/book.model.test-utils';
import * as testUtils from '../../test/test-utils';

describe('Book Selectors', () => {
  describe('getAllBooks', () => {
    let books = generators.randomBooks(5);
    let state = testUtils.createState(books);

    it('Should return all books', () => {
      const result = fromSelectors.selectAllBooks.projector(state);

      expect(result).toEqual(books);
    });
  });

  describe('getSelectedBook', () => {
    let books: Book[] = generators.randomBooks(5);
    let state = testUtils.createState(books);

    it('Should return selected book', () => {
      const result = fromSelectors.getSelectedBook.projector(state);

      expect(result).toEqual(books[0]);
    });
  });
});
