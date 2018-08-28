import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimsPage } from './lims.page';

describe('LimsPage', () => {
  let component: LimsPage;
  let fixture: ComponentFixture<LimsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
