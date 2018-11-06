import { Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LlDialogPhoto } from '../../model/ll-dialog-photo.model';
@Component({
  selector: 'app-ll-dialog',
  templateUrl: './ll-dialog.component.html',
  styleUrls: ['./ll-dialog.component.scss']
})
export class LlDialogComponent {

  public photoUrls: string[];

  constructor(
    public dialogRef: MatDialogRef<LlDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LlDialogPhoto) {
      this.photoUrls = data.photos.map(element => element.thumbnailUrl);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
