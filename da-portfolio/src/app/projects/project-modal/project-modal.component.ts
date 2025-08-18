import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() project: any;
  @Input() index!: number;
  @Input() total!: number;
  @Input() techMap!: { [key: string]: string };
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
