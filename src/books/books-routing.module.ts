import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { BookSummaryContainerComponent } from './containers/book-summary-container/book-summary-container.component';
import { ViewBookDetailsPageComponent } from './containers/view-book-details-page/view-book-details-page.component';
import { BookDetailsStoreGuard } from './guards/book-details-store.guard';
import { BooksStoreGuard } from './guards/books-store.guard';
// import { BookDetailsStoreGuard, BooksStoreGuard } from './guards';

const bookRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'books',
    canActivate: [BooksStoreGuard],
    component: BookSummaryContainerComponent,
  },
  {
    path: 'books/:bookId',
    canActivate: [BookDetailsStoreGuard],
    component: ViewBookDetailsPageComponent,
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
