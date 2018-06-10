import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Book} from "../../models/book";
import {Reader} from "../../models/reader";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  allBooks: any;
  allReaders: any;
  mostPopularBook: Book;

  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;
  }

  editBookDetails(book: Book) {
    this.route.navigate(['book', book.bookID]);
  }

  editReaderDetails(reader: Reader) {
    this.route.navigate(['reader', reader.readerID]);
  }
}
