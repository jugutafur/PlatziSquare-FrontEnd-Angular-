import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPlatziSquareComponent } from './components/main-platzi-square/main-platzi-square.component';
import { ObjetoComponent } from './components/objeto/objeto.component';

const routes : Routes = [
    {
        path: '',
        component: MainPlatziSquareComponent
    },
    {
        path: 'objeto',
        component: ObjetoComponent
    },
    {
        path: 'otro',
        component: MainPlatziSquareComponent
    }
]

@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class PlatziSquareRoutingModule{ }