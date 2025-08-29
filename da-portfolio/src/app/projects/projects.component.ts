import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectImgComponent } from './project-img/project-img.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { Project } from './project.model';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [ProjectCardComponent, ProjectImgComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  selectedIndex: number = 0;

  modalProject: Project | null = null;
  modalIndex: number = 0;
  showModal: boolean = false;

  projects: Project[] = [
    {
      name: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description: 'My personal portfolio website.',
      image: 'assets/img/projects/Join.png',
      url: {
        GitHub: 'https://github.com/MarioMarkwart/Join',
        Live: 'https://mariomarkwart.github.io/Join/',
      },
    },
    {
      name: 'Pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'My personal portfolio website.',
      image: 'assets/img/projects/Pokedex.png',
      url: {
        GitHub: 'https://github.com/MarioMarkwart/Pokedex',
        Live: 'https://mario-markwart.developerakademie.net/9_pokedex/',
      },
    },
    {
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: "Jump'n'run-Game El Pollo Loco.",
      image: 'assets/img/projects/ElPolloLoco.png',
      url: {
        GitHub: 'https://github.com/MarioMarkwart/ElPolloLoco',
        Live: 'https://mariomarkwart.github.io/ElPolloLoco/',
      },
    },
  ];

  technologies = {
    JavaScript: 'assets/img/projects/icons/icon-javascript.png',
    HTML: 'assets/img/projects/icons/icon-html.png',
    CSS: 'assets/img/projects/icons/icon-css.png',
    Firebase: 'assets/img/projects/icons/icon-firebase.png',
    Angular: 'assets/img/projects/icons/icon-angular.png',
    TypeScript: 'assets/img/projects/icons/icon-typescript.png',
  };

  onProjectHover(project: Project, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
  }

  onMouseLeave() {
    this.selectedProject = null;
  }

  toggleModal(project: Project, index: number) {
    this.modalProject = project;
    this.modalIndex = index;
    this.showModal = true;
  }

  onNextProject(currentIndex: number) {
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.toggleModal(this.projects[nextIndex], nextIndex);
  }
}
