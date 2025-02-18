import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversizedComponent } from './oversized.component';

describe('OversizedComponent', () => {
  let component: OversizedComponent;
  let fixture: ComponentFixture<OversizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OversizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
