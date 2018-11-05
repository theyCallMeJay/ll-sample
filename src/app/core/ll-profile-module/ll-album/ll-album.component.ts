import { Component, OnInit, Inject} from '@angular/core';
import { LlGlobalStoreService } from 'src/app/shared/service/ll-global-store.service';
import { take, tap, exhaustMap, } from 'rxjs/operators';
import { forkJoin, of} from 'rxjs';
import { LlHttpService } from 'src/app/shared/service/ll-http.service';
import { Album, Photo } from 'src/app/shared/model/ll-user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LlDialogComponent } from 'src/app/shared/component/ll-dialog/ll-dialog.component';

@Component({
  selector: 'app-ll-album',
  templateUrl: './ll-album.component.html',
  styleUrls: ['./ll-album.component.scss']
})
export class LlAlbumComponent implements OnInit {
  public userId;
  public albums: Album[];
  public photos: Photo[];

  constructor(
    private llGlobalStoreService: LlGlobalStoreService,
    private llHttpService: LlHttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.llGlobalStoreService.getUserId().pipe(
      take(1),
      tap(data => {
        this.userId = data;
      }),
      exhaustMap(() => {
        return forkJoin(
          this.llHttpService.getRequest('https://jsonplaceholder.typicode.com/albums?userId=' + this.userId),
          this.llHttpService.getRequest('https://jsonplaceholder.typicode.com/photos?albumId=' + this.userId),
        );
      })
    ).subscribe((data: any) => {
      this.albums = data[0];
      this.photos = data[1].slice(0, 10);
      console.log(this.photos);
    });
  }

  public openDialog(index: number): void {
    const dialogRef = this.dialog.open(LlDialogComponent, {
      width: '800px',
      height: '500px',
      data: {photos: this.photos}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
