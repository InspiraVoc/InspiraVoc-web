import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMentorComponent } from './side-bar-mentor.component';

describe('SideBarMentorComponent', () => {
  let component: SideBarMentorComponent;
  let fixture: ComponentFixture<SideBarMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
