import { Component } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-marquee',
	imports: [],
	templateUrl: './marquee.component.html',
	styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
	marqueeList: string[] = [
		'Work from Remote',
		'Based in Fischerbach',
		'Frontend Developer',
	];
}
