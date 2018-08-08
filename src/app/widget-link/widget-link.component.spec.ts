import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLinkComponent } from './widget-link.component';

describe('WidgetLinkComponent', () => {
  let component: WidgetLinkComponent;
  let fixture: ComponentFixture<WidgetLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
