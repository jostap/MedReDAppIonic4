import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticmanagerPage } from './logisticmanager.page';

describe('LogisticmanagerPage', () => {
  let component: LogisticmanagerPage;
  let fixture: ComponentFixture<LogisticmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticmanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
