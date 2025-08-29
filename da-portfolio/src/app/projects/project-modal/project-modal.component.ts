import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() project: any;
  @Input() index!: number;
  @Input() total!: number;
  @Input() projects: any[] = [];
  @Input() techMap!: { [key: string]: string };
  @Output() close = new EventEmitter<void>();
  @Output() nextProject = new EventEmitter<number>();

  onClose() {
    this.close.emit();
  }

  next() {
    this.nextProject.emit(this.index);
  }
}
