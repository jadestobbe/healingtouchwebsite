import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeacockCosmeticsComponent } from './peacock-cosmetics.component';

describe('PeacockCosmeticsComponent', () => {
  let component: PeacockCosmeticsComponent;
  let fixture: ComponentFixture<PeacockCosmeticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeacockCosmeticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeacockCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
