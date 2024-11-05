import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="error">
      {{ message }}
    </div>
  `,
  styles: [
    `
    .error {
      color: red;
      padding: 10px;
      border: 1px solid red;
    }
  `,
  ],
})
export class ErrorComponent {
  @Input() message!: string;
}
