import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Reader} from "../../models/reader";

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styleUrls: ['./edit-reader.component.css']
})
export class EditReaderComponent implements OnInit {
  selectedReader: Reader;
  constructor(private router: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const readerId = parseInt(this.router.snapshot.params['id']);
    this.selectedReader = this.dataService.findReaderById(readerId);
  }

}
