import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereporterComponent } from './createreporter.component';

describe('CreatereporterComponent', () => {
  let component: CreatereporterComponent;
  let fixture: ComponentFixture<CreatereporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatereporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
