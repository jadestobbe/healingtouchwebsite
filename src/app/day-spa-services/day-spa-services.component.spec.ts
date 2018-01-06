import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySpaServicesComponent } from './day-spa-services.component';

describe('DaySpaServicesComponent', () => {
  let component: DaySpaServicesComponent;
  let fixture: ComponentFixture<DaySpaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySpaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySpaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
