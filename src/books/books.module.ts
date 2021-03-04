import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSummaryListComponent } from './components/book-summary-list/book-summary-list.component';
import { BookSummaryItemComponent } from './components/book-summary-item/book-summary-item.component';
import { BookSummaryContainerComponent } from './containers/book-summary-container/book-summary-container.component';
import { BookSummaryHeaderComponent } from './components/book-summary-header/book-summary-header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/effects/book.effects';
import * as fromBooks from './store/reducers/books.reducers';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookDetailsPageComponent } from './containers/view-book-details-page/view-book-details-page.component';
import { ViewBookDetailsComponent } from './components/view-book-details/view-book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    BookSummaryListComponent,
    BookSummaryItemComponent,
    BookSummaryContainerComponent,
    BookSummaryHeaderComponent,
    ViewBookDetailsPageComponent,
    ViewBookDetailsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule,
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducers),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BooksModule {}
