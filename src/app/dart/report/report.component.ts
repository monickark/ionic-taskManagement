import { Component, OnInit, ViewChild } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  constructor(private dartService: DartService) { }
  darts: Dart[];
  public errorMessage: any = '';
  
  onSubmit( name, fromDate: Date, toDate: Date) {
    console.log('Name' + name);
    console.log('From date' + fromDate);
    console.log('To date' + toDate);
    this.dartService.getDarts(name, fromDate, toDate)
      .subscribe((data: Dart[]) => {
        this.darts = data;
        console.log(this.darts);
      }, errMsg => {
        this.errorMessage = errMsg;
        this.errorMessage = 'No data Found';
        console.log('message' + this.errorMessage);
      }
      );
  }
}
