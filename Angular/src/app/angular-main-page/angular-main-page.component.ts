import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-main-page',
  templateUrl: './angular-main-page.component.html',
  styleUrls: ['./angular-main-page.component.scss']
})
export class AngularMainPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  title = 'Angular'
}
