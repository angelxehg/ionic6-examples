import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: { title: string }[] = [
    {
      title: 'accordion',
    },
    {
      title: 'breadcrumbs'
    },
    {
      title: 'datetime'
    },
    {
      title: 'slides'
    },
    {
      title: 'spinner'
    },
  ];

  constructor() { }

}
