import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalProductsStoreComponent } from './natural-products-store.component';

describe('NaturalProductsStoreComponent', () => {
  let component: NaturalProductsStoreComponent;
  let fixture: ComponentFixture<NaturalProductsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalProductsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalProductsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
