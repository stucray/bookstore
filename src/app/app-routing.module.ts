import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSummaryContainerComponent } from '../books/containers/book-summary-container/book-summary-container.component';

const routes: Routes = [{ path: '', redirectTo: '/books', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
