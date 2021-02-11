import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSummaryContainerComponent } from './book-summary-container.component';

describe('BookSummaryContainerComponent', () => {
  let component: BookSummaryContainerComponent;
  let fixture: ComponentFixture<BookSummaryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSummaryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
