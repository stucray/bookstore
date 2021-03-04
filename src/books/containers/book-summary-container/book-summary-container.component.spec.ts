import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Book } from 'src/books/models/book.model';

import { BookSummaryContainerComponent } from './book-summary-container.component';
import * as fromReducers from '../../store/reducers';
import * as fromActions from '../../store/actions';
import { BookSummaryHeaderComponent } from 'src/books/components/book-summary-header/book-summary-header.component';
import { BookSummaryItemComponent } from 'src/books/components/book-summary-item/book-summary-item.component';
import { BookSummaryListComponent } from 'src/books/components/book-summary-list/book-summary-list.component';
import { randomBooks } from '../../models/book.model.test-utils';
import * as testUtils from '../../test/test-utils';

describe('BookSummaryContainerComponent', () => {
  let component: BookSummaryContainerComponent;
  let fixture: ComponentFixture<BookSummaryContainerComponent>;
  let store: MockStore<fromReducers.State>;

  let books: Book[];

  const initialState = testUtils.createState();

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        BookSummaryContainerComponent,
        BookSummaryHeaderComponent,
        BookSummaryItemComponent,
        BookSummaryListComponent,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    books = randomBooks(5);
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(BookSummaryContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('Should dispatch bookSelected Action when book is selected', () => {
    let book = books[0];
    component.onBookSelected(book);
    expect(store.dispatch).toHaveBeenCalledWith(
      fromActions.bookSelected({ book: book })
    );
  });
});
