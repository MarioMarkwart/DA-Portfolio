import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() label: string = 'Button';
	@Input() type: 'button' | 'submit' = 'button';
	@Output() clicked = new EventEmitter<void>();

	handleClick() {
		this.clicked.emit();
	}
}
