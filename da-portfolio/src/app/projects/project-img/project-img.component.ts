import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-project-img',
  imports: [],
  templateUrl: './project-img.component.html',
  styleUrl: './project-img.component.scss'
})
export class ProjectImgComponent {
  @Input() project: any | null; 
}
