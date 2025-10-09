import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
	standalone: true,
	selector: 'app-contact',
	imports: [FormsModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	contactData = { name: '', email: '', message: '', privacy: false };

	onSubmit(ngForm: NgForm) {
		if (ngForm.valid && ngForm.submitted) {
			console.log(this.contactData);
		} else {
			console.log('Form is not valid');
		}
	}
}
