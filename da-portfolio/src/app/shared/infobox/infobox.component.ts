import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-infobox',
  imports: [],
  templateUrl: './infobox.component.html',
  styleUrl: './infobox.component.scss'
})
export class InfoboxComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() location: string = '';
  @Input() openMinded: string = '';
  @Input() problemSolving: string = '';

  locationIcon: string = 'assets/img/misc/location.png';
  openMindedIcon: string = 'assets/img/misc/cognition.png';
  problemSolvingIcon: string = 'assets/img/misc/quality.png';
}