import { Component } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-testimonials',
	imports: [],
	templateUrl: './testimonials.component.html',
	styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {

	constructor() { }
	testemonials = [
		{
			name: 'John Doe',
			relation: 'Former Colleague',
			feedback: 'This is a great service! Highly recommend.',
		},
		{
			name: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
			relation: "Team Partner",
			feedback: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
		},
		{
			name: "J. Schmitt",
			relation: "Frontend Developer",
			feedback: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
		}
	]


}
