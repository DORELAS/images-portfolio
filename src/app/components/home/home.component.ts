import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 0;
  images: any[] = [];
  scroll = true;
  spinnershow = false;
  constructor(
    private imagesService: ImagesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages(): void {
    this.imagesService.getImages(this.page).subscribe(response => {
      const arrayImages = response.photos;
      if (arrayImages.length > 0) {
        arrayImages.forEach((element) => {
          this.images.push(element);
        });
        if (this.spinnershow) {
          this.spinner.hide();
          this.spinnershow = false;
        }
      } else {
        this.scroll = false;
      }
    }, (error) => {
      this.toastr.error('Some error has occured, please try again!', 'Error');
    });
  }

  onScroll(): void {
    if (this.scroll) {
      this.spinner.show();
      this.spinnershow = true;
      this.loadImages();
    }
  }

  loadImages(): void {
    this.page++;
    this.getAllImages();
  }
}
