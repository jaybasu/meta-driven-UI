import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [ngStyle]="style">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </header>
  `,
  styles: [
    `
    header {
      text-align: center;
      padding: 20px;
      background-color: #f0f0f0;
    }
  `,
  ],
})
export class HeaderComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() style: { [key: string]: string } = {};
}
