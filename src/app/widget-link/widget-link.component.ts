import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../app.types';

@Component({
  selector: 'app-widget-link',
  templateUrl: './widget-link.component.html',
  styleUrls: ['./widget-link.component.css']
})
export class WidgetLinkComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
