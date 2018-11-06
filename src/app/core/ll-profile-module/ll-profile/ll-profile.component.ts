import { Component, OnInit } from '@angular/core';
import { LlGlobalStoreService } from 'src/app/shared/service/ll-global-store.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { llFadeAnimation } from 'src/app/shared/animation/ll-fadeAnimation';

@Component({
  selector: 'app-ll-profile',
  templateUrl: './ll-profile.component.html',
  styleUrls: ['./ll-profile.component.scss'],
  animations: [llFadeAnimation]
})
export class LlProfileComponent implements OnInit {
  public userName: string;
  public company: string;

  constructor(
    private llglobalStoreService: LlGlobalStoreService
  ) { }

  ngOnInit() {
    this.llglobalStoreService.getUser().subscribe(result => {
      this.userName = result.name;
      this.company = result.company.name;
    });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
