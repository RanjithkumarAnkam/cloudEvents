import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFacilitiesComponent } from './services-facilities.component';

describe('ServicesFacilitiesComponent', () => {
  let component: ServicesFacilitiesComponent;
  let fixture: ComponentFixture<ServicesFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
