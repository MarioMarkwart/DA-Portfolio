import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
	standalone: true,
	selector: 'app-projects',
	imports: [ProjectCardComponent],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

	projects = [
		{
			name: 'Join',
			technologies: ['HTML', 'CSS', 'Javascript', 'Firebase',],
			description: 'My personal portfolio website.',
			image: 'assets/img/portfolio.png',
			url: 'https://github.com/da-portfolio/da-portfolio',
		},
		{
			name: 'Pokedex',
			technologies: ['HTML', 'CSS', 'JavaScript'],
			description: 'My personal portfolio website.',
			image: 'assets/img/portfolio.png',
			url: ''
		},
		{
			name: 'El Pollo Loco',
			technologies: ['HTML', 'CSS', 'JavaScript'],
			description: 'Jump\'n\'run-Game El Pollo Loco.',
			image: 'assets/img/projects/portfolio.png',
			url: ''
		}
	]
}
