import * as fromReducers from './books.reducers';
import * as fromActions from '../actions/books.actions';
import { Book } from 'src/books/models/book.model';
import { randomBooks, randomBook } from '../../models/book.model.test-utils';
import { Dictionary } from '@ngrx/entity';
import * as testUtils from '../../test/test-utils';

describe('Books Reducer', () => {
  //Test that the state is unmodified by an unknown action.
  describe('Unknown Action', () => {
    it('Should return unmodified state', () => {
      //TODO: Should explicitly define state so it is not so coupled.
      const initialState = testUtils.createState();
      const action = {
        type: 'Unknown',
      };

      const state = fromReducers.reducers(initialState, action);

      //State should be the same object
      expect(state).toBe(initialState);
      //And values shoudl match
      expect(state).toEqual(initialState);
    });
  });

  describe('Load All Books Action', () => {
    it('Should set all books', () => {
      let books = randomBooks(2);
      let endState = testUtils.createState(books);

      const initialState = testUtils.createState();
      const action = fromActions.loadSuccess({ books: books });
      const state = fromReducers.reducers(initialState, action);

      expect(state).not.toBe(initialState);
      expect(state.entities).toEqual(endState.entities);
    });
  });

  describe('Book selected action', () => {
    it('Sould set selected book in the store', () => {
      const book: Book = randomBook();

      const initialState = testUtils.createState();
      const action = fromActions.bookSelected({ book });
      const state = fromReducers.reducers(initialState, action);

      expect(state).not.toBe(initialState);
      expect(state.selectedBook).toEqual(book);
    });
  });
});
