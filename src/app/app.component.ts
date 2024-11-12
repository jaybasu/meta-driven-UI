import { Component } from '@angular/core';
import { DynamicUiComponent } from './pages/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [DynamicUiComponent],
})
export class AppComponent {
}