import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-summary-item',
  templateUrl: './book-summary-item.component.html',
  styleUrls: ['./book-summary-item.component.scss'],
})
export class BookSummaryItemComponent {
  @Input() book!: Book;
}
