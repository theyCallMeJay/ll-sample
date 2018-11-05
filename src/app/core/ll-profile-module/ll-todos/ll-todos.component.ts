import { Component, OnInit } from '@angular/core';
import { LlGlobalStoreService } from 'src/app/shared/service/ll-global-store.service';
import { Todo } from 'src/app/shared/model/ll-user.model';
import { mergeMap, take} from 'rxjs/operators';
import { LlHttpService } from 'src/app/shared/service/ll-http.service';

@Component({
  selector: 'app-ll-todos',
  templateUrl: './ll-todos.component.html',
  styleUrls: ['./ll-todos.component.scss']
})
export class LlTodosComponent implements OnInit {

  public rows: Todo[] = [];
  public tempRows: Todo[] = [];
  public selected = [];
  public slideChecked = false;
  public color = 'warn';

  constructor(
    private llGlobalstoreService: LlGlobalStoreService,
    private llHttpService: LlHttpService,
  ) {
    this.llGlobalstoreService.getUserId().pipe(
      take(1),
      mergeMap(id => this.llHttpService.getRequest('https://jsonplaceholder.typicode.com/todos?userId=' + id))
    ).subscribe((data: Todo[]) => {
      this.rows = [...data];
      this.tempRows = data;
      this.initializeSelected(this.rows);
    });
  }

  ngOnInit() {

  }
  private initializeSelected(list: Todo[]) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].completed === true) {
        this.selected.push(list[i]);
      }
    }
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return true;
  }

  slideChanged(event) {
    const checked = event.checked;
    if (checked) {
      const temp = this.tempRows.filter(data => {
        return data.completed === true;
      });

      this.rows = temp;
    } else {
      this.rows = this.tempRows;
    }

  }

}
