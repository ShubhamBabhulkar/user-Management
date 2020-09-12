import { AddUserPopupComponent } from './../add-user-popup/add-user-popup.component';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-news-dashboar',
  templateUrl: './news-dashboar.component.html',
  styleUrls: ['./news-dashboar.component.scss']
})
export class NewsDashboarComponent implements OnInit {
  invalidPassword = false;
  hide = true;
  isErrorMessage: any;
  dataSource = [];
  setCount: any;
  constructor(
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog = () => {
    this.dialog.open(AddUserPopupComponent)
    .afterClosed()
    .subscribe(result => {
      if (result) {
        this.setData(result);
      }
    });
  }

  setData = (data) => {
    this.dataSource.push(data);
    this.dataSource = this.dataSource.slice();
    this.getGenderCount(this.dataSource);
}
  getGenderCount = (data) => {
    var maleCount = 0;
    var femaleCount = 0;
    data.forEach(function(value) {
      if (value.gender === 'male') {
          maleCount++;
        } else if (value.gender === 'female') {
          femaleCount++;
        }
    });
    this.setCount = {
      'maleCount': maleCount,
      'femaleCount': femaleCount,
      'dataLength': data.length
    };
    console.log(this.setCount);
  }
}