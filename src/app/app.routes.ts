import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import the HomeComponent class without the .ts file extension
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Assign the HomeComponent class to the component property
  },
];
