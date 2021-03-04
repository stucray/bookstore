import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { BookEffects } from './book.effects';
import * as fromReducers from '../reducers';
import { BookService } from '../../services/books.service';
import { loadRequest, loadSuccess } from '../actions';
import { Book } from 'src/books/models/book.model';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold, hot } from 'jasmine-marbles';

import { randomBooks } from '../../models/book.model.test-utils';
import * as testUtils from '../../test/test-utils';

describe('Book Effects', () => {
  const initialState = testUtils.createState();
  let bookService: BookService;

  //let router: Router;
  let effects: BookEffects;
  let store: MockStore<fromReducers.State>;
  let actions$: Observable<any>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        RouterModule,
        BookEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        {
          provide: BookService,
          useValue: {
            getAllBooks: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.inject(BookEffects);
    store = TestBed.inject(MockStore);
    store.setState(initialState);
    bookService = TestBed.inject(BookService);

    // testScheduler = new TestScheduler((actual, expected) => {
    //   expect(actual).toEqual(expected);
    // });
  });

  it('Should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadBooks$', () => {
    it('Should handle loading books and return loadSucess action', () => {
      let books = randomBooks(5);

      const action = loadRequest();
      const outcome = loadSuccess({ books });

      actions$ = hot('-a', { a: action });
      const response$ = cold('-b|', { b: books });
      const expected = cold('--c', { c: outcome });
      bookService.getAllBooks = jest.fn(() => response$);

      expect(effects.loadBooks$).toBeObservable(expected);
      //expectObservable(effects.loadBooks$).toBe('--b', { b: outcome });
    });
  });
});
