import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddVenueComponent } from './manager-add-venue.component';

describe('ManagerAddVenueComponent', () => {
  let component: ManagerAddVenueComponent;
  let fixture: ComponentFixture<ManagerAddVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
