import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../app.types';

@Component({
  selector: 'app-widget-paragraph',
  templateUrl: './widget-paragraph.component.html',
  styleUrls: ['./widget-paragraph.component.css']
})
export class WidgetParagraphComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
