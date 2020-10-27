import { Component, OnInit } from '@angular/core';
import { title } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  public title = title;

  constructor() {}

  ngOnInit() {}
}
