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
	@Input() link: string = '';
	@Output() clicked = new EventEmitter<void>();

	handleClick() {
		if (this.link) {
			window.location.href = this.link;
		} else {
			this.clicked.emit();
		}
	}
}
