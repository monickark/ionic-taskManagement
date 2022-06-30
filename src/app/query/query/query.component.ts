import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Query } from './query';
import { QueryService } from './query.service';

//For Mobile App
import { ListPicker } from "tns-core-modules/ui/list-picker";
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private queryService: QueryService, private formBuilder: FormBuilder) { }
  queryForm: FormGroup;
  submitted = false;
  message: string = '';
  showMyContainer: boolean = false;
  public errorMessage: any = '';
  query = new Query();
  queries: Query[];
  curDate: Date = new Date();
  public users: Array<string> = [];
  public picked: string;
  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      userName: ['', Validators.required],
      query: ['', Validators.required]
    });

    this.users = ['Hema', 'Ramesh', 'Monicka', 'Madhavan', 'Aadhavan', 'Madhan', 'Prasanth'];

    this.queryService.getQueries()
      .subscribe(
        (data: Query[]) => {
          console.log(data);
          this.queries = data;
          console.log('inside component' + this.queries);
          this.showMyContainer = true
        }
      );
  }
  get formControl() { return this.queryForm.controls; }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit() {

    console.log(this.queryForm.valid);
    if (this.queryForm.invalid) {
      console.log('form invalid');
      this.submitted = true;
    } else {
      console.log('form valid');
      console.log(this.queryForm.value.userName);
      this.query.userName = this.queryForm.value.userName;
      this.query.query = this.queryForm.value.query;
      this.query.date = this.curDate.toISOString().substring(0, 10);
      this.queryService.saveQuery(this.query)
        .subscribe(
          message => {
            console.log('message' + message),
              this.message = message;
          }, errMsg => {
            this.errorMessage = errMsg;
            this.errorMessage = 'No data Found';
            console.log('message' + this.errorMessage);
          }
        )
      console.log(this.queryForm.valid);
    }
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.users[picker.selectedIndex];
  }
}
