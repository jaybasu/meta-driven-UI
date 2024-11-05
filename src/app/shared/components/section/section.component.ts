import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="{'two-column': layout === 'two-column'}">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <img *ngIf="image" [src]="image" alt="{{ title }}">
    </section>
  `,
  styles: [
    `
    section {
      margin-bottom: 20px;
    }
    .two-column {
      display: flex;
      gap: 20px;
    }

    .two-column > * {
      flex: 1;
    }
  `,
  ],
})
export class SectionComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() image?: string;
  @Input() layout?: string;
}
