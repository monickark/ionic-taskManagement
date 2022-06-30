import { Component, OnInit } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
  constructor(private dartService: DartService) { }
  actualTask: string;
  dart: any;
  darts: Dart[];
  curDate: Date = new Date();
  showMyContainer: boolean = false;
  public errorMessage = null;
  message: string;
  onClick(name) {
    this.dartService.getDayDart(name)
      .subscribe((data: Dart[]) => {
        this.darts = data;
        console.log(this.darts);
        this.showMyContainer = true;
      }, errMsg => {
        this.errorMessage = 'No data Found';
        console.log('message' + this.errorMessage);
        this.showMyContainer = false;
      });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit() {
    console.log('After: ' + JSON.stringify(this.darts));
    this.dartService.updateDarts(this.darts)
      .subscribe(
        data => this.message = data,
        error => console.error('success', error)
      )
  }
}
