import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ll-searchbar',
  templateUrl: './ll-searchbar.component.html',
  styleUrls: ['./ll-searchbar.component.scss']
})
export class LlSearchbarComponent implements OnInit {


  @Output()
  keyword = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  public search(event: any): void {
    this.keyword.emit(event.target.value.trim());
  }

}
