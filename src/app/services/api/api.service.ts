import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base_url: string = environment.base_url;
  private api_key: string = environment.api_key;

  constructor(private http: HttpClient) { }

  /**
   * GET SERVICE
   */
    getRequest(endpoint, params?): Observable<any> {
      const path = this.base_url + endpoint + '&api_key=' + this.api_key;
      console.log(path);
      return this.http.get(path, {params});
    }
}
