import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { ForDirectiveExample } from './components/for-directive-example/for-directive-example';
import { ComponentInputExample } from './components/component-input-example/component-input-example';
import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { SimpleDatatableExample } from './components/simple-datatable-example/simple-datatable-example';

export const routes: Routes = [
    {path: 'for-directive-example', component:ForDirectiveExample},
    {path: 'component-input-example', component:ComponentInputExample},
    {path:'event-bind-example', component:EventBindExample},
    {path: 'simple-datatable-example', component: SimpleDatatableExample},
    {path:'welcome', component :Welcome},
    {path:'', redirectTo:'/welcome', pathMatch:'full'}
];
