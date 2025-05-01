import { Component } from '@angular/core';
import { InfoboxComponent } from '../shared/infobox/infobox.component';

@Component({
	standalone: true,
	selector: 'app-about',
	imports: [InfoboxComponent],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {}
