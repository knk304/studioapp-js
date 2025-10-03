import { Routes } from '@angular/router';
import { DrulsUiComponent } from './components/druls-ui/druls-ui.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { NewTemplateComponent } from './components/new-template/new-template.component';

export const routes: Routes = [
	{ path: 'druls-ui', component: DrulsUiComponent },
	{ path: 'workflow', component: WorkflowComponent },
	{
	  path: 'new-template',
	  component: NewTemplateComponent,
	  children: [
	    { path: 'page-one', loadComponent: () => import('./components/new-template/pages/page-one.component').then(m => m.PageOneComponent) },
	    { path: 'page-two', loadComponent: () => import('./components/new-template/pages/page-two.component').then(m => m.PageTwoComponent) },
	    { path: 'page-three', loadComponent: () => import('./components/new-template/pages/page-three.component').then(m => m.PageThreeComponent) }
	  ]
	},
	{ path: '', redirectTo: 'druls-ui', pathMatch: 'full' }
];
