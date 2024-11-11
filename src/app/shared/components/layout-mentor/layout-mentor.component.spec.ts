import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMentorComponent } from './layout-mentor.component';

describe('LayoutMentorComponent', () => {
  let component: LayoutMentorComponent;
  let fixture: ComponentFixture<LayoutMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
