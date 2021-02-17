import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/helpers/constants/constants';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesEndpoint: string = Constant.images;

  constructor(private apiService: ApiService) { }

  /**
   * Service used to get all the images needed for the application
   */
  getImages(pageNumber): Observable<any> {
    const endpoint = this.imagesEndpoint + pageNumber;
    console.log(endpoint);
    return this.apiService.getRequest(endpoint);
  }
}
