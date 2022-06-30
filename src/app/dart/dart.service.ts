import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Dart } from './dart';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DartService {
  baseUrl = environment.baseUrl;
  curDate: Date = new Date();
  insertUrl = this.baseUrl + '/dart_create';
  selectUrl = this.baseUrl + '/dart_select';
  dayDartUrl = this.baseUrl + '/dart_selectSingle';
  updateDartUrl = this.baseUrl + '/dart_update';
  constructor(private http: HttpClient) { }

  create(darts: Dart[]) {
    console.log(darts.length);
    console.log(this.insertUrl);
    return this.http.post<any>(this.insertUrl, darts);
  }

  getDarts(name, fromDate, toDate): Observable<any> {
    console.log('Name' + name);
    console.log('From date' + fromDate);
    console.log('To date' + toDate);
    return this.http.get<any>(this.selectUrl + '/' + name + '&' + fromDate +
      '&' + toDate).pipe(
        map(this.extractData)
        , catchError(this.handleError));

  }

  getDayDart(name): Observable<any> {
    console.log('Dart obj' + name);
    var url = this.dayDartUrl + '/' + name + '&' + new Date().toISOString().substring(0, 10);
    console.log('URL' + url);
    return this.http.get<any>(url).pipe(
      map(this.extractData)
      , catchError(this.handleError));
  }

  updateDarts(darts: Dart[]) {
    return this.http.post<any>(this.updateDartUrl, darts);
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
        console.log("NO error");
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }

    } else {
      console.log('error');
      errMsg = error.message ? error.message : error.toString();
    } return Observable.throw(errMsg);
  }
}
