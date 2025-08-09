import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectImgComponent } from './project-img/project-img.component';

@Component({
	standalone: true,
	selector: 'app-projects',
	imports: [ProjectCardComponent, ProjectImgComponent],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
	selectedProject: any | null = null;
	selectedIndex: number = 0;

	projects = [
		{
			name: 'Join',
			technologies: ['HTML', 'CSS', 'Javascript', 'Firebase'],
			description: 'My personal portfolio website.',
			image: 'assets/img/projects/Join.png',
			url: 'https://github.com/da-portfolio/da-portfolio',
		},
		{
			name: 'Pokedex',
			technologies: ['HTML', 'CSS', 'JavaScript'],
			description: 'My personal portfolio website.',
			image: 'assets/img/projects/Pokedex.png',
			url: '',
		},
		{
			name: 'El Pollo Loco',
			technologies: ['HTML', 'CSS', 'JavaScript'],
			description: "Jump'n'run-Game El Pollo Loco.",
			image: 'assets/img/projects/ElPolloLoco.png',
			url: '',
		},
	];

	technologies = {
		"JavaScript": "da-portfolio/public/assets/img/projects/icons/icon-javascript.png",
		"HTML": "da-portfolio/public/assets/img/projects/icons/icon-html.png",
		"CSS": "da-portfolio/public/assets/img/projects/icons/icon-css.png",
		"Firebase": "da-portfolio/public/assets/img/projects/icons/icon-firebase.png",
		"Angular": "da-portfolio/public/assets/img/projects/icons/icon-angular.png",
		"TypeScript": "da-portfolio/public/assets/img/projects/icons/icon-typescript.png",
	}

	onProjectHover(project: any, index: number) {
		this.selectedProject = project;
		this.selectedIndex = index;
	}

	onMouseLeave() {
		this.selectedProject = null;
	}
}
