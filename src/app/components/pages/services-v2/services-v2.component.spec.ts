import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesV2Component } from './services-v2.component';

describe('ServicesV2Component', () => {
  let component: ServicesV2Component;
  let fixture: ComponentFixture<ServicesV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
