import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCareProductsComponent } from './skin-care-products.component';

describe('SkinCareProductsComponent', () => {
  let component: SkinCareProductsComponent;
  let fixture: ComponentFixture<SkinCareProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinCareProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinCareProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
