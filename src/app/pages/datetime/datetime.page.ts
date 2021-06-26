import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  @ViewChild('customDatetime', { static: false }) datetime: HTMLIonDatetimeElement;
  constructor() { }

  confirm() {
    this.datetime.confirm();
  }

  reset() {
    this.datetime.reset();
  }

  ngOnInit() {
  }

}
