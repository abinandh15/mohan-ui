import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable, Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(public appSrv: AppService){

  }
  dropdownList:{ item_id: number, item_text: string }[] = [];
  selectedItems: { item_id: number, item_text: string }[] = [];
  dropdownSettings: IDropdownSettings = {};
  subscriptions: Subscription[] = []
  dropdownForm = new FormGroup({
    environment: new FormControl('', Validators.required),
    productType: new FormControl('')
  });
  productTypeArray = ['Test1', 'Test2'];
  environmentArray = ['Sample1', 'Sample2'];
  ngOnInit() {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    this.subscriptions.push(this.appSrv.getEnvironment().subscribe(res=>{
      this.dropdownList = res
    }))
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onSubmit () {
    const payload = {};
    console.log();
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(subscriber=>{
        subscriber.unsubscribe()
      })
  }
}
