import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLearnComponent } from './components/main-learn/main-learn.component'
import { BasicsAndDirectivesComponent } from './components/basics-and-directives/basics-and-directives.component';

const routes : Routes = [
    {
        path: '',
        component: MainLearnComponent
    },
    {
        path: 'Basic',
        component: BasicsAndDirectivesComponent
    },
    {
        path: 'otro',
        component: MainLearnComponent
    }
]

@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class LearnRoutuingModule{ }