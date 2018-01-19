import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberSummaryComponent } from './subscriber-summary.component';

describe('SubscriberSummaryComponent', () => {
  let component: SubscriberSummaryComponent;
  let fixture: ComponentFixture<SubscriberSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
