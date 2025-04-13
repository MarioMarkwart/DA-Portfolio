import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { MarqueeComponent } from "./marquee/marquee.component";

@Component({
	selector: 'app-hero',
	imports: [ButtonComponent, MarqueeComponent],
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.scss',
})
export class HeroComponent {

	checkWork()	{
		console.log('check work');
	}

	contact()	{
		console.log('contact');
	}
}
