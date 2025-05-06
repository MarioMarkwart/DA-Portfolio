import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  standalone: true,
  selector: 'app-infobox',
  imports: [ButtonComponent],
  templateUrl: './infobox.component.html',
  styleUrl: './infobox.component.scss'
})
export class InfoboxComponent {
  @Input() topic: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() location: string = '';
  @Input() openMinded: string = '';
  @Input() problemSolving: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
  @Input() paragraph1: string = '';
  @Input() paragraph2: string = '';
  @Input() paragraph3: string = '';
  @Input() paragraph4: string = '';
  @Input() paragraph5: string = '';


  locationIcon: string = 'assets/img/misc/location.png';
  openMindedIcon: string = 'assets/img/misc/cognition.png';
  problemSolvingIcon: string = 'assets/img/misc/quality.png';
}