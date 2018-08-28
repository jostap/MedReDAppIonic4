import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPage } from './crm.page';

describe('CrmPage', () => {
  let component: CrmPage;
  let fixture: ComponentFixture<CrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
