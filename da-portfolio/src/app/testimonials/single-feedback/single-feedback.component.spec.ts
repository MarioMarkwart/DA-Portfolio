import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFeedbackComponent } from './single-feedback.component';

describe('SingleFeedbackComponent', () => {
  let component: SingleFeedbackComponent;
  let fixture: ComponentFixture<SingleFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
