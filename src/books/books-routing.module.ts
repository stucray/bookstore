import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { BookSummaryContainerComponent } from './containers/book-summary-container/book-summary-container.component';
import { ViewBookDetailsPageComponent } from './containers/view-book-details-page/view-book-details-page.component';

const bookRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookSummaryContainerComponent },
  { path: 'books/:bookId', component: ViewBookDetailsPageComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
