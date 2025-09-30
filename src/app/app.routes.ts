import { Routes } from '@angular/router';
import { DrulsUiComponent } from './components/druls-ui/druls-ui.component';
import { WorkflowComponent } from './components/workflow/workflow.component';

export const routes: Routes = [
	{ path: 'druls-ui', component: DrulsUiComponent },
	{ path: 'workflow', component: WorkflowComponent },
	{ path: '', redirectTo: 'druls-ui', pathMatch: 'full' }
];
