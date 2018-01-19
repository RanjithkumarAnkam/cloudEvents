import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerManageScreensComponent } from './manager-manage-screens.component';

describe('ManagerManageScreensComponent', () => {
  let component: ManagerManageScreensComponent;
  let fixture: ComponentFixture<ManagerManageScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerManageScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerManageScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
