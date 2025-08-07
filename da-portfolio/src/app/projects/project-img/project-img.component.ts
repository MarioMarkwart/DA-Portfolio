import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-img',
  imports: [CommonModule],
  templateUrl: './project-img.component.html',
  styleUrl: './project-img.component.scss'
})
export class ProjectImgComponent {
  @Input() project: any | null = null;
  @Input() index: number = 0;
  @Input() total: number = 1;
  
  get verticalPosition(): string {
    if (this.total <= 1) return '0%';
    const fraction = this.index / (this.total - 1);
    return `${fraction * 100}%`;
  }

  get isFirst(): boolean {
    return this.index === 0;
  }
  
  get isLast(): boolean {
    return this.index === this.total - 1;
  }
  
  get verticalStyle(): { [key: string]: string } {
    if (this.total <= 1 || this.isFirst) {
      return {
        top: '0',
        transform: 'none',
      };
    }
  
    if (this.isLast) {
      return {
        bottom: '0',
        transform: 'none',
      };
    }
  
    // Zwischenwerte
    const fraction = this.index / (this.total - 1);
    return {
      top: `${fraction * 100}%`,
      transform: 'translateY(-50%)',
    };
  }
  
  
}
