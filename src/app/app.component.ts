/**
 * Title: app.component.ts
 * Author: Sarah Massie
 * Date: 6 February 2021
 * Description: Application component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Bob's Repair Shop";
  }
}
