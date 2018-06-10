import { Injectable } from '@angular/core';
import {Reader} from "../models/reader";
import {allBooks, allReaders} from "../data";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mostPopularBook: Book;
  constructor() {
    this.mostPopularBook = allBooks[0];
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  findReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  findBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }
}
