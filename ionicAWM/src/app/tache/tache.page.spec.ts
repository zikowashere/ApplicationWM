import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachePage } from './tache.page';

describe('TachePage', () => {
  let component: TachePage;
  let fixture: ComponentFixture<TachePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
