import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-summary-list',
  templateUrl: './book-summary-list.component.html',
  styleUrls: ['./book-summary-list.component.scss'],
})
export class BookSummaryListComponent {
  @Input() books!: Book[] | null;
}
