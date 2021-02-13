import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-summary-item',
  templateUrl: './book-summary-item.component.html',
  styleUrls: ['./book-summary-item.component.scss'],
})
export class BookSummaryItemComponent {
  @Input() book!: Book;

  //Output and event handler to pass book selected event up the chain.
  @Output() bookSelectedEvent: EventEmitter<Book> = new EventEmitter<Book>();

  onBookSelected(selectedBook: Book) {
    this.bookSelectedEvent.emit(selectedBook);
  }
}
