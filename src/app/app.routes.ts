import { Routes } from '@angular/router';
import { DrulsUiComponent } from './components/druls-ui/druls-ui.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { NewTemplateComponent } from './components/new-template/new-template.component';

export const routes: Routes = [
	{ path: 'druls-ui', component: DrulsUiComponent },
	{ path: 'workflow', component: WorkflowComponent },
	{ path: 'new-template', component: NewTemplateComponent },
	{ path: '', redirectTo: 'druls-ui', pathMatch: 'full' }
];
