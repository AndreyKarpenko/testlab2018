import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItunesService {

  constructor(private http: HttpClient) {

  }

  getMusic(data: string): Observable<any> {
    return this.http.get(environment.url + data);
  }
}
