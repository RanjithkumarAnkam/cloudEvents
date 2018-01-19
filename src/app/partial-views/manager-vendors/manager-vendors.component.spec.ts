import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVendorsComponent } from './manager-vendors.component';

describe('ManagerVendorsComponent', () => {
  let component: ManagerVendorsComponent;
  let fixture: ComponentFixture<ManagerVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
