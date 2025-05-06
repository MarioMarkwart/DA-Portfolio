import { Component } from '@angular/core';
import { InfoboxComponent } from "../shared/infobox/infobox.component";

@Component({
	standalone: true,
	selector: 'app-skillset',
	imports: [InfoboxComponent],
	templateUrl: './skillset.component.html',
	styleUrl: './skillset.component.scss',
})
export class SkillsetComponent {}
