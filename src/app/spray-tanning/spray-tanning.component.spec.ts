import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprayTanningComponent } from './spray-tanning.component';

describe('SprayTanningComponent', () => {
  let component: SprayTanningComponent;
  let fixture: ComponentFixture<SprayTanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprayTanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprayTanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
