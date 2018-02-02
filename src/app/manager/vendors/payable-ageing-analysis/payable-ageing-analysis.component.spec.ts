import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableAgeingAnalysisComponent } from './payable-ageing-analysis.component';

describe('PayableAgeingAnalysisComponent', () => {
  let component: PayableAgeingAnalysisComponent;
  let fixture: ComponentFixture<PayableAgeingAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayableAgeingAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayableAgeingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
