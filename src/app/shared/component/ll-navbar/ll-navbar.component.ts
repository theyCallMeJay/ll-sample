import { Component, OnInit } from '@angular/core';
import { User } from '../../model/ll-user.model';
import { LlGlobalStoreService } from '../../service/ll-global-store.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ll-navbar',
  templateUrl: './ll-navbar.component.html',
  styleUrls: ['./ll-navbar.component.scss']
})
export class LlNavbarComponent implements OnInit {
  public user: User;
  public website: string;

  constructor(
    private llGlobalStoreSerice: LlGlobalStoreService
  ) { }

  ngOnInit() {
    this.llGlobalStoreSerice.getUser().pipe(
      take(1)
    ).subscribe(data => {
      this.user = data;
      this.website = this.user.website;
    });
  }
  public resetLogin(): void {
    this.llGlobalStoreSerice.setIsLoggedIn(false);
  }

  public onNavigate(): void {
  window.open('http://' + this.website, '_blank');
  }
}
