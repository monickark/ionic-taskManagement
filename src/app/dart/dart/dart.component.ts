import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent implements OnInit {
  show=true;
  constructor() {
    console.log (this.show);
   }

  ngOnInit() {
  }

}
