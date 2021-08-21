import { NgModule } from '@angular/core';

import { MainLearnComponent } from './components/main-learn/main-learn.component';
import { MenuLearnComponent } from './components/menu-learn/menu-learn.component';
import { BasicsAndDirectivesComponent } from './components/basics-and-directives/basics-and-directives.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CommonModule } from '@angular/common';
import { LearnRoutuingModule } from './learn-routuing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        MainLearnComponent,
        MenuLearnComponent,
        BasicsAndDirectivesComponent,
        PageNotFoundComponent
    ],
    imports:[
        CommonModule,
        LearnRoutuingModule,
        FormsModule
    ],
    exports:[]
})

export class LearnModule { }
