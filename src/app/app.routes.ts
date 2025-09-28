import { Routes } from '@angular/router';
import { DrulsUiComponent } from './druls-ui.component';

export const routes: Routes = [
	{ path: 'druls-ui', component: DrulsUiComponent },
	{ path: '', redirectTo: 'druls-ui', pathMatch: 'full' }
];
