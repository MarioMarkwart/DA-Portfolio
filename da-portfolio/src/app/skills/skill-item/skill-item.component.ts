import { Component } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-skill-item',
	imports: [],
	templateUrl: './skill-item.component.html',
	styleUrl: './skill-item.component.scss',
})
export class SkillItemComponent {
	skills: any[] = [
		{"name": "HTML", "icon": "assets/img/skills/html.png"},
		{"name": "CSS", "icon": "assets/img/skills/css.png"},
		{"name": "JavaScript", "icon": "assets/img/skills/javascript.png"},
		{"name": "TypeScript", "icon": "assets/img/skills/typescript.png"},
		{"name": "Angluar", "icon": "assets/img/skills/angular.png"},
		{"name": "Firebase", "icon": "assets/img/skills/firebase.png"},
		{"name": "GIT", "icon": "assets/img/skills/git.png"},
		{"name": "Material Design", "icon": "assets/img/skills/material design.png"},
		{"name": "Growth mindset", "icon": "assets/img/skills/growthmindset.png"},
		// {"name": "rest-api", "icon": "assets/img/skills/rest-api.png"},
		// {"name": "scrum", "icon": "assets/img/skills/scrum.png"},
		// {"name": "vue.js", "icon": "assets/img/skills/vue.js.png"}
	  ];
}
