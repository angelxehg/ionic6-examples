import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: { name: string }[] = [
    {
      name: 'accordion',
    },
    {
      name: 'breadcrumbs'
    },
    {
      name: 'datetime'
    },
  ];

  constructor() { }

}
