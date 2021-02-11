import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSummaryHeaderComponent } from './book-summary-header.component';

describe('BookSummaryHeaderComponent', () => {
  let component: BookSummaryHeaderComponent;
  let fixture: ComponentFixture<BookSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSummaryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
