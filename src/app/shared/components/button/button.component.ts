import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="handleClick()">
      <img *ngIf="icon" [src]="icon" alt=""> {{ label }}
    </button>
  `,
  styles: [
    `
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
  `,
  ],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() action!: string;
  @Input() icon?: string;
  @Output() buttonClick = new EventEmitter<string>();

  handleClick() {
    this.buttonClick.emit(this.action);
    // Handle the action, e.g., navigate to a new page
  }
}
