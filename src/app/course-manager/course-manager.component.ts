import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-manager',
  templateUrl: './course-manager.component.html',
  styleUrls: ['./course-manager.component.css']
})
export class CourseManagerComponent implements OnInit {

  isCollapsed: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
