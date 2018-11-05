import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LlGlobalStoreService } from 'src/app/shared/service/ll-global-store.service';
import { mergeMap, take } from 'rxjs/operators';
import { LlHttpService } from 'src/app/shared/service/ll-http.service';
import { Post } from 'src/app/shared/model/ll-user.model';

@Component({
  selector: 'app-ll-posts',
  templateUrl: './ll-posts.component.html',
  styleUrls: ['./ll-posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LlPostsComponent implements OnInit {

  public rows: Post[];
  public tempRows: Post[];
  private timeout: any;
  @ViewChild('myTable') table: any;

  constructor(
    private llGlobalStoreService: LlGlobalStoreService,
    private llHttpService: LlHttpService
  ) { }

  ngOnInit() {
    this.llGlobalStoreService.getUser().pipe(
      take(1),
      mergeMap(result => {
        const userId = result.id;
        const endPoint = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId;
        return this.llHttpService.getRequest(endPoint);
      })
    ).subscribe((result: Post[]) => {
      this.rows = [...result];
      this.tempRows = result;
    });
  }

  public searchByKeyword(word: string) {

    const val = word.toLowerCase();

    const temp = this.tempRows.filter(data  => {
      return data.body.toLowerCase().includes(val) || data.title.toLowerCase().includes(val);
    });

    this.rows = temp;

  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
}
