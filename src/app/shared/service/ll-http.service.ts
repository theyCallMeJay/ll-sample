import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LlHttpService {

  constructor(
    private http: HttpClient
  ) { }

  public getRequest(endpoint) {
    return this.http.get(endpoint);
  }


}
