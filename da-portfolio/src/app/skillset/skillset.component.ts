import { Component } from '@angular/core';
import { InfoboxComponent } from "../shared/infobox/infobox.component";
import { SkillItemComponent } from '../skills/skill-item/skill-item.component';

@Component({
	standalone: true,
	selector: 'app-skillset',
	imports: [InfoboxComponent, SkillItemComponent],
	templateUrl: './skillset.component.html',
	styleUrl: './skillset.component.scss',
})
export class SkillsetComponent {

}
