import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterpanelComponent } from './reporterpanel.component';

describe('ReporterpanelComponent', () => {
  let component: ReporterpanelComponent;
  let fixture: ComponentFixture<ReporterpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
