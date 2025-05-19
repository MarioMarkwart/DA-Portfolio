import { Component } from '@angular/core';
import { SingleFeedbackComponent } from "./single-feedback/single-feedback.component";

@Component({
	standalone: true,
	selector: 'app-testimonials',
	imports: [SingleFeedbackComponent],
	templateUrl: './testimonials.component.html',
	styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {

	constructor() { }
	testimonials = [
		{
			author: 'John Doe',
			relation: 'Former Colleague',
			text: 'This is a great service! Highly recommend.',
		},
		{
			author: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
			relation: "Team Partner",
			text: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
		},
		{
			author: "J. Schmitt",
			relation: "Frontend Developer",
			text: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
		}
	]


}
