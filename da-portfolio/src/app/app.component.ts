import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
	standalone: true,
	selector: 'app-root',
	imports: [
		RouterOutlet,
		HeaderComponent,
		HeroComponent,
		AboutComponent,
		SkillsetComponent,
		ProjectsComponent,
		TestimonialsComponent,
		ContactComponent,
		FooterComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'da-portfolio';
}
