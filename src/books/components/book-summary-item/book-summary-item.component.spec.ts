import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSummaryItemComponent } from './book-summary-item.component';

describe('BookSummaryItemComponent', () => {
  let component: BookSummaryItemComponent;
  let fixture: ComponentFixture<BookSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSummaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
