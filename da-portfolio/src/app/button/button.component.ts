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
	@Input() externalLink: boolean = false;
	@Output() clicked = new EventEmitter<void>();

	handleClick() {
		if (this.link) {
			if (this.externalLink) {
				window.open(this.link, '_blank');
			} else window.location.href = this.link;
		} else {
			this.clicked.emit();
		}
	}
}
