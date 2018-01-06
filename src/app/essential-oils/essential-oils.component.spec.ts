import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialOilsComponent } from './essential-oils.component';

describe('EssentialOilsComponent', () => {
  let component: EssentialOilsComponent;
  let fixture: ComponentFixture<EssentialOilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialOilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialOilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
