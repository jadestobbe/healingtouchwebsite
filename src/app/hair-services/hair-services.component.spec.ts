import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairServicesComponent } from './hair-services.component';

describe('HairServicesComponent', () => {
  let component: HairServicesComponent;
  let fixture: ComponentFixture<HairServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
