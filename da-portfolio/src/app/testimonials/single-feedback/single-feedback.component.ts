import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-single-feedback',
  imports: [],
  templateUrl: './single-feedback.component.html',
  styleUrl: './single-feedback.component.scss'
})
export class SingleFeedbackComponent {
  @Input() testimonial: { author: string; relation: string; text: string } = {
    author: '',
    relation: '',
    text: ''
  };
}
