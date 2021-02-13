import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDashboardViewComponent } from './ui-dashboard-view.component';

describe('UiDashboardViewComponent', () => {
  let component: UiDashboardViewComponent;
  let fixture: ComponentFixture<UiDashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDashboardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
