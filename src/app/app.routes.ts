import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { ForDirectiveExample } from './components/for-directive-example/for-directive-example';
import { ComponentInputExample } from './components/component-input-example/component-input-example';
import { EventBindExample } from './components/event-bind-example/event-bind-example';

export const routes: Routes = [
    {path: 'for-directive-example', component:ForDirectiveExample},
    {path: 'componenet-input-example', component:ComponentInputExample},
    {path:'event-bind-example', component:EventBindExample},
    {path:'welcome', component :Welcome},
    {path:'', redirectTo:'/welcome', pathMatch:'full'}
];
