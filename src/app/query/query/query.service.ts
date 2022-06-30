import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Query } from './query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  saveQuery(queries1) {
    console.log(queries1);
    return this.http.post<any>(this.baseUrl + '/query_insert', queries1);
  }

  getQueries(): Observable<any> {

    return this.http.get(this.baseUrl + '/query_select').pipe(
      map(this.extractData)
      , catchError(this.handleError));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      if (error.status === 0) {
        console.log('Hi');
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }

    } else {
      console.log('error');
      errMsg = error.message ? error.message : error.toString();
    }
    console.log('Error message' + errMsg);
    return Observable.throw(errMsg);
  }

}
