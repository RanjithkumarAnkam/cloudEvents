import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSupportComponent } from './manager-support.component';

describe('ManagerSupportComponent', () => {
  let component: ManagerSupportComponent;
  let fixture: ComponentFixture<ManagerSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
