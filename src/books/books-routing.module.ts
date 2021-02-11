import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSummaryContainerComponent } from './containers/book-summary-container/book-summary-container.component';
import { ViewBookDetailsPageComponent } from './containers/view-book-details-page/view-book-details-page.component';

const bookRoutes: Routes = [
  { path: 'books', component: BookSummaryContainerComponent },
  { path: 'books/:id', component: ViewBookDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
