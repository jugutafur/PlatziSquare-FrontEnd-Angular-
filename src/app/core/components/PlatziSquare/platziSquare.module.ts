import { NgModule } from '@angular/core';

import { MainPlatziSquareComponent } from './components/main-platzi-square/main-platzi-square.component';
import { MenuPlatziSquareComponent } from './components/menu-platzi-square/menu-platzi-square.component';
import { ObjetoComponent } from './components/objeto/objeto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CommonModule } from '@angular/common';
import { PlatziSquareRoutingModule } from './platziSquare-routuing.module';

@NgModule({
    declarations:[
        MainPlatziSquareComponent,
        MenuPlatziSquareComponent,
        ObjetoComponent,
        PageNotFoundComponent
    ],
    imports:[
        CommonModule,
        PlatziSquareRoutingModule
    ],
    exports:[]
})

export class PlatziSquareModule {}

