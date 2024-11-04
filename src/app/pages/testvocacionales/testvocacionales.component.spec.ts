import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestvocacionalesComponent } from './testvocacionales.component';

describe('TestvocacionalesComponent', () => {
  let component: TestvocacionalesComponent;
  let fixture: ComponentFixture<TestvocacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestvocacionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestvocacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
