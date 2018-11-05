import { Component, Input, OnInit } from '@angular/core';
import { LlGlobalStoreService } from './shared/service/ll-global-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  public isLoggedIn = false;

  constructor(private llGlobalStoreService: LlGlobalStoreService) {}

  ngOnInit(): void {
    this.llGlobalStoreService.getIsLoggedIn().subscribe(data => {
      console.log(data);
      this.isLoggedIn = data;
      console.log(this.isLoggedIn);
    });
  }

}
