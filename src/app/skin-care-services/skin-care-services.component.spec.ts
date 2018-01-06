import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCareServicesComponent } from './skin-care-services.component';

describe('SkinCareServicesComponent', () => {
  let component: SkinCareServicesComponent;
  let fixture: ComponentFixture<SkinCareServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinCareServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinCareServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
