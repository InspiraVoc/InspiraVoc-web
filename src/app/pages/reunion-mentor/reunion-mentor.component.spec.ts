import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionMentorComponent } from './reunion-mentor.component';

describe('ReunionMentorComponent', () => {
  let component: ReunionMentorComponent;
  let fixture: ComponentFixture<ReunionMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReunionMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
