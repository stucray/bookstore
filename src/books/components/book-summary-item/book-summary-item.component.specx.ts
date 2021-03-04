import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { BookSummaryItemComponent } from './book-summary-item.component';

// describe('BookSummaryItemComponent', () => {
//   let component: BookSummaryItemComponent;
//   let fixture: ComponentFixture<BookSummaryItemComponent>;
//   let store: MockStore;
//   const initialState = {
//     loading: false,
//     selectedBook: null,
//   };
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [BookSummaryItemComponent],
//       providers: [provideMockStore({ initialState })],
//     }).compileComponents();

//     store = TestBed.inject(MockStore);
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BookSummaryItemComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
//});
