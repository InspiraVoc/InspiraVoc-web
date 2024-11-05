import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TestVocacionalesComponent } from './testvocacionales.component';

describe('TestVocacionalesComponent', () => {
  let component: TestVocacionalesComponent;
  let fixture: ComponentFixture<TestVocacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestVocacionalesComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVocacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all questions', () => {
    const questionElements = fixture.debugElement.queryAll(By.css('label'));
    expect(questionElements.length).toBe(component.questions.length);
  });

  it('should calculate result correctly', () => {
    component.answers = ['Sí', 'No'];
    component.onSubmit();
    expect(component.result).toBeDefined();
  });
});