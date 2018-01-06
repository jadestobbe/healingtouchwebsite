import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicuresPedicuresComponent } from './manicures-pedicures.component';

describe('ManicuresPedicuresComponent', () => {
  let component: ManicuresPedicuresComponent;
  let fixture: ComponentFixture<ManicuresPedicuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManicuresPedicuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManicuresPedicuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
