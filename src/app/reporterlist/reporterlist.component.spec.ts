import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterlistComponent } from './reporterlist.component';

describe('ReporterlistComponent', () => {
  let component: ReporterlistComponent;
  let fixture: ComponentFixture<ReporterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
