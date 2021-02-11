import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookDetailsPageComponent } from './view-book-details-page.component';

describe('ViewBookDetailsPageComponent', () => {
  let component: ViewBookDetailsPageComponent;
  let fixture: ComponentFixture<ViewBookDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
