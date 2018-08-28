import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsamplePage } from './logsample.page';

describe('LogsamplePage', () => {
  let component: LogsamplePage;
  let fixture: ComponentFixture<LogsamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
