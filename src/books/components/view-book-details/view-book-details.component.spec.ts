import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookDetailsComponent } from './view-book-details.component';

describe('ViewBookDetailsComponent', () => {
  let component: ViewBookDetailsComponent;
  let fixture: ComponentFixture<ViewBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
