import { Component, ViewChild,  ElementRef} from '@angular/core';
import { LibTestRkService } from 'lib-test-rk';
import { ImageFile } from 'lib-test-rk/lib/models/imageFile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lib-consumer';
  imgFile: ImageFile;
  isLoading: boolean;
  rotated = false;
  @ViewChild('rkImageElement') imageElement: ElementRef<HTMLImageElement>;

  constructor(private imgService: LibTestRkService) {}

  readStart(started: boolean): void {
    this.isLoading = true;
  }

  readComplete(imgFile: ImageFile): void {
    this.imgFile = imgFile;
    this.isLoading = false;
  }

  removeFile(index): void {
    this.isLoading = true;
    this.imgService.removeFile(index, this.imgFile);
    this.isLoading = false;
  }

  rotate(): void {
    this.imgService.rotateImage(this.imageElement, '180');
    this.rotated = true;
  }

  clearRotation(): void {
    this.imgService.rotateImage(this.imageElement, '0');
    this.rotated = false;
  }
}
