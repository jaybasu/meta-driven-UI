import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { DynamicUiComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: DynamicUiComponent },
//   { path: 'page2', loadComponent: () => import('./page2/page2.component').then(m => m.Page2Component) } // Example for another page
  // ... add more routes as needed
];

export const appRoutingProviders = [
  provideRouter(routes)
];