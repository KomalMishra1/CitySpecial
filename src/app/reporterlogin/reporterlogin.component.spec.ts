import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterloginComponent } from './reporterlogin.component';

describe('ReporterloginComponent', () => {
  let component: ReporterloginComponent;
  let fixture: ComponentFixture<ReporterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
