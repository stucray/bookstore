import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-summary-list',
  templateUrl: './book-summary-list.component.html',
  styleUrls: ['./book-summary-list.component.scss'],
})
export class BookSummaryListComponent {
  @Input() books!: Book[] | null;

  //Output and event handler to pass book selected event up the chain.
  @Output() bookSelectedEvent: EventEmitter<Book> = new EventEmitter<Book>();

  onBookSelected(selectedBook: Book) {
    console.log('Book selected in summary list: ' + selectedBook.title);
    this.bookSelectedEvent.emit(selectedBook);
  }
}
