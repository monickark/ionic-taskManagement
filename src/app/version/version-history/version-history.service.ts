import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { VersionHistory } from './version-history';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionHistoryService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  create(history) {
    console.log(this.baseUrl + '/version_insert');
    return this.http.post<any>(this.baseUrl + '/version_insert', history);
  }
  getHistories():Observable<any>{
    return this.http.get(this.baseUrl + '/version_select');
}
}
