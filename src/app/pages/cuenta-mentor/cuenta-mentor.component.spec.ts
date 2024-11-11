import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaMentorComponent } from './cuenta-mentor.component';

describe('CuentaMentorComponent', () => {
  let component: CuentaMentorComponent;
  let fixture: ComponentFixture<CuentaMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentaMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
