import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableAgeingAnalysisComponent } from './receivable-ageing-analysis.component';

describe('ReceivableAgeingAnalysisComponent', () => {
  let component: ReceivableAgeingAnalysisComponent;
  let fixture: ComponentFixture<ReceivableAgeingAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivableAgeingAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivableAgeingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
