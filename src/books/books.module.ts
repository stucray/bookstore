import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSummaryListComponent } from './components/book-summary-list/book-summary-list.component';
import { BookSummaryItemComponent } from './components/book-summary-item/book-summary-item.component';
import { BookSummaryContainerComponent } from './containers/book-summary-container/book-summary-container.component';
import { BookSummaryHeaderComponent } from './components/book-summary-header/book-summary-header.component';
import { StoreModule } from '@ngrx/store';
import { BookEffects } from './store/effects/book.effects';
import * as fromBooks from './store/reducers/books.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookSummaryListComponent,
    BookSummaryItemComponent,
    BookSummaryContainerComponent,
    BookSummaryHeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducers),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BooksModule {}
