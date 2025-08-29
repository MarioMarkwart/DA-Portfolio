import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectImgComponent } from './project-img/project-img.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
	standalone: true,
	selector: 'app-projects',
	imports: [ProjectCardComponent, ProjectImgComponent, ProjectModalComponent],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
	selectedProject: any | null = null;   // für Hover-Bild
	selectedIndex: number = 0;
	
	modalProject: any | null = null;      // für Modal
	modalIndex: number = 0;
	showModal: boolean = false;
	

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
		"JavaScript": "assets/img/projects/icons/icon-javascript.png",
		"HTML": "assets/img/projects/icons/icon-html.png",
		"CSS": "assets/img/projects/icons/icon-css.png",
		"Firebase": "assets/img/projects/icons/icon-firebase.png",
		"Angular": "assets/img/projects/icons/icon-angular.png",
		"TypeScript": "assets/img/projects/icons/icon-typescript.png",
	}

	onProjectHover(project: any, index: number) {
		this.selectedProject = project;
		this.selectedIndex = index;
	  }
	  
	  onMouseLeave() {
		this.selectedProject = null;
	  }

	  toggleModal(project: any, index: number) {
		console.log('TRIGGERED')
		this.modalProject = project;
		this.modalIndex = index;
		this.showModal = true;
	  }

	  onNextProject(currentIndex: number) {
		const nextIndex = (currentIndex + 1) % this.projects.length;
		this.toggleModal(this.projects[nextIndex], nextIndex);
	  }
	
}
