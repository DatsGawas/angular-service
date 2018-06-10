/**
 * Created by dattaram on 8/6/18.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'test',
  template:`
  child component :- {{show}}<br/>
  <button (click)="setFlag()">ok</button>
  `
})

export class TestComponent implements OnInit {
  @Input() show: boolean;
  @Output() showChange: any = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
  }
  setFlag() {
   this.show = !this.show;
   this.showChange.emit(this.show);
  }
}
