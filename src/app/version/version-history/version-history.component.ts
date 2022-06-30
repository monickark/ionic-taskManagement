import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VersionHistoryService } from './version-history.service';
import { VersionHistory } from './version-history'

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.css']
})
export class VersionHistoryComponent implements OnInit {
  message: string;
  registrationForm: FormGroup;
  history = new VersionHistory();
  histories: VersionHistory[];
  constructor(private fb: FormBuilder, private vh: VersionHistoryService) {
    this.createForm();
  }
  ngOnInit() {
    this.vh.getHistories()
      .subscribe(
        (data: VersionHistory[]) => {
          console.log(data);
          this.histories = data;
          console.log("inside component" + this.histories);

        }
      );
  }
  createForm() {
    this.registrationForm = this.fb.group({
      dateChanged: ['', Validators.required],
      bugFixed: ['', Validators.required],
      changes: ['', Validators.required],
      versionNo: ['', Validators.required]
    });
  }

  createHistory(dateChanged, bugFixed, changes, versionNo) {
    this.history.dateChanged = dateChanged;
    this.history.bugFixed = bugFixed;
    this.history.changes = changes;
    this.history.versionNo = versionNo;

    console.log('Version obj' + JSON.stringify(this.history));
    this.vh.create(this.history) .subscribe(
      message => {
        console.log('message' + message),
          this.message = message;
      })
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
