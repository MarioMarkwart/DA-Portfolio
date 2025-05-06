import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "./about/about.component";
import { InfoboxComponent } from "./shared/infobox/infobox.component";
import { SkillItemComponent } from "./skills/skill-item/skill-item.component";
import { SkillsetComponent } from "./skillset/skillset.component";

@Component({
  standalone:true,
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, InfoboxComponent, SkillItemComponent, SkillsetComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'da-portfolio';
}
