import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/books/models/book.model';

@Component({
  selector: 'app-view-book-details',
  templateUrl: './view-book-details.component.html',
  styleUrls: ['./view-book-details.component.scss'],
})
export class ViewBookDetailsComponent {
  @Input() book!: Book | null;
}
