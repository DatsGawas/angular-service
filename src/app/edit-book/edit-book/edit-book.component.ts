import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../models/book";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let bookId = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = this.dataService.findBookById(bookId);
  }
  setMostPopular() {
    this.dataService.mostPopularBook = this.selectedBook;
    this.router.navigate(['dashboard']);

  }

}
