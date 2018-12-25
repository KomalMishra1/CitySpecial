import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterprofileComponent } from './reporterprofile.component';

describe('ReporterprofileComponent', () => {
  let component: ReporterprofileComponent;
  let fixture: ComponentFixture<ReporterprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
