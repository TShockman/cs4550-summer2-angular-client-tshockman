import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../app.types';

@Component({
  selector: 'app-widget-img',
  templateUrl: './widget-img.component.html',
  styleUrls: ['./widget-img.component.css']
})
export class WidgetImgComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
